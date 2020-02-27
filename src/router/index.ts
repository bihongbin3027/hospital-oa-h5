import Home from '../pages/home'
import ClericalBoard from '../pages/clericalBoard'
import ClericalTemplate from '../pages/clericalBoard/template'
import DraftCreate from '../pages/clericalBoard/draft/create'
import PostCreate from '../pages/clericalBoard/post/create'

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
]

export default routes
