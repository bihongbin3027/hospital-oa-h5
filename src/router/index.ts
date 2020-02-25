import Home from '../pages/home'
import ClericalBoard from '../pages/clericalBoard'

const routes: Array<object> = [
  {
    path: '/',
    exact: true,
    component: Home, // 首页
  },
  {
    path: '/clerical-board',
    component: ClericalBoard, // 公文管理
  },
]

export default routes
