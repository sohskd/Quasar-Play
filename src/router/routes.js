
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      {
        path: '/analytics',
        component: () => import('pages/Analytics.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/AnalyticsPages/Charts.vue')
          },
          {
            path: 'charts',
            component: () => import('pages/AnalyticsPages/Charts.vue')
          },
          {
            path: 'maps',
            component: () => import('pages/AnalyticsPages/Maps.vue')
          }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
