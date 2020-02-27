import Home from '../pages/home'
import ClericalBoard from '../pages/clericalBoard'
import ClericalTemplate from '../pages/clericalBoard/template'

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
    component: ClericalTemplate, //选择公文类型和模板
  },
]

export default routes
