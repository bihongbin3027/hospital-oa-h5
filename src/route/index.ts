import React from 'react'

export interface IRouteBase {
  path: string // 路由路径
  exact?: boolean // 严格匹配
  component?: any // 路由组件
}

export interface IRoute extends IRouteBase {
  children?: IRoute
}

const routes: IRoute[] = [
  {
    path: '/page',
    component: React.lazy(() => import('@/pages/startApp')), // 启动页
  },
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('@/pages/home')), // 首页
  },
  {
    path: '/clerical-board',
    component: React.lazy(() => import('@/pages/clericalBoard')), // 公文管理
  },
  {
    path: '/clerical-template/:id',
    component: React.lazy(() => import('@/pages/clericalBoard/template')), // 选择公文类型和模板
  },
  {
    path: '/clerical-draft-create',
    component: React.lazy(() => import('@/pages/clericalBoard/draft/create')), // 创建公文拟稿
  },
  {
    path: '/clerical-post-create',
    component: React.lazy(() => import('@/pages/clericalBoard/post/create')), // 创建公文发文
  },
  {
    path: '/clerical-post-receiver',
    component: React.lazy(() => import('@/pages/clericalBoard/post/receiver')), // 创建公文发文-选择接收人
  },
  {
    path: '/clerical-doc-details/:id',
    component: React.lazy(() => import('@/pages/clericalBoard/docDetails')), // 公文详情
  },
  {
    path: '/clerical-doc-receiver',
    component: React.lazy(() =>
      import('@/pages/clericalBoard/docDetails/receiver'),
    ), // 公文详情-查看接收人
  },
  {
    path: '/clerical-doc-signFor',
    component: React.lazy(() =>
      import('@/pages/clericalBoard/docDetails/signingSituation'),
    ), // 公文详情-签收情况
  },
  {
    path: '/clerical-review-details/:id',
    component: React.lazy(() => import('@/pages/clericalBoard/reviewDetails')), // 审核详情
  },
  {
    path: '/clerical-review-receiver',
    component: React.lazy(() =>
      import('@/pages/clericalBoard/reviewDetails/receiver'),
    ), // 审核详情-接收人
  },
]

export default routes
