import Home from '@/pages/home'
import ClericalBoard from '@/pages/clericalBoard'
import ClericalTemplate from '@/pages/clericalBoard/template'
import DraftCreate from '@/pages/clericalBoard/draft/create'
import PostCreate from '@/pages/clericalBoard/post/create'
import PostReceiver from '@/pages/clericalBoard/post/receiver'
import DocDetails from '@/pages/clericalBoard/docDetails'
import DocReceiver from '@/pages/clericalBoard/docDetails/receiver'
import DocSignSituation from '@/pages/clericalBoard/docDetails/signingSituation'
import ReviewDetails from '@/pages/clericalBoard/reviewDetails'
import ReviewReceiver from '@/pages/clericalBoard/reviewDetails/receiver'

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
  {
    path: '/clerical-template/:id',
    component: ClericalTemplate, // 选择公文类型和模板
  },
  {
    path: '/clerical-draft-create',
    component: DraftCreate, // 创建公文拟稿
  },
  {
    path: '/clerical-post-create',
    component: PostCreate, // 创建公文发文
  },
  {
    path: '/clerical-post-receiver',
    component: PostReceiver, // 创建公文发文-选择接收人
  },
  {
    path: '/clerical-doc-details/:id',
    component: DocDetails, // 公文详情
  },
  {
    path: '/clerical-doc-receiver',
    component: DocReceiver, // 公文详情-查看接收人
  },
  {
    path: '/clerical-doc-signFor',
    component: DocSignSituation, // 公文详情-签收情况
  },
  {
    path: '/clerical-review-details/:id',
    component: ReviewDetails, // 审核详情
  },
  {
    path: '/clerical-review-receiver',
    component: ReviewReceiver, // 审核详情-接收人
  },
]

export default routes
