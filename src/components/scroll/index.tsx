import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useMemo,
} from 'react'
import BScroll from 'better-scroll'
import { debounce } from '@/utils'
import { ScrollContainer, PullUpLoading, PullDownLoading } from './style'

export interface propType {
  direction: 'vertical' | 'horizental'
  click: boolean
  refresh: boolean
  pullUpLoading: boolean
  pullDownLoading: boolean
  bounceTop: boolean
  bounceBottom: boolean
  pullUp: Function
  pullDown: Function
  onScroll: Function | null
  children: React.ReactNode
}

const Scroll = forwardRef((props: propType, ref) => {
  const [bScroll, setBScroll] = useState<any>()
  const scrollContainerRef = useRef<any>()

  const {
    direction,
    click,
    refresh,
    pullUpLoading,
    pullDownLoading,
    bounceTop,
    bounceBottom,
  } = props

  const { pullUp, pullDown, onScroll } = props

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 500)
  }, [pullUp])

  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 500)
  }, [pullDown])

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!bScroll || !onScroll) return
    bScroll.on('scroll', onScroll)
    return () => {
      bScroll.off('scroll', onScroll)
    }
  }, [onScroll, bScroll])

  useEffect(() => {
    if (!bScroll || !pullUp) return
    const handlePullUp = () => {
      //判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce()
      }
    }
    bScroll.on('scrollEnd', handlePullUp)
    return () => {
      bScroll.off('scrollEnd', handlePullUp)
    }
  }, [pullUp, pullUpDebounce, bScroll])

  useEffect(() => {
    if (!bScroll || !pullDown) return
    const handlePullDown = (pos: any) => {
      //判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce()
      }
    }
    bScroll.on('touchEnd', handlePullDown)
    return () => {
      bScroll.off('touchEnd', handlePullDown)
    }
  }, [pullDown, pullDownDebounce, bScroll])

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll
      }
    },
  }))

  const PullUpDisplayStyle = pullUpLoading
    ? { display: '' }
    : { display: 'none' }
  const PullDownDisplayStyle = pullDownLoading
    ? { display: '' }
    : { display: 'none' }
  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
      {/* 滑到底部加载动画 */}
      <PullUpLoading style={PullUpDisplayStyle}>
        <div>底部加载loading</div>
      </PullUpLoading>
      {/* 顶部下拉刷新动画 */}
      <PullDownLoading style={PullDownDisplayStyle}>
        <div>下拉loading</div>
      </PullDownLoading>
    </ScrollContainer>
  )
})

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: () => {},
  pullDown: () => {},
  bounceTop: true,
  bounceBottom: true,
}

export default Scroll
