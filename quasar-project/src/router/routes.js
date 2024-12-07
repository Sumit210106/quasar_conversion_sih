const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/aboutus', component: () => import('pages/AboutUs.vue') },
      { path: '/feedback', component: () => import('pages/Feedback.vue') },
      { path: '/help&support', component: () => import('pages/HelpAndSupport.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/homepage', component: () => import('pages/HomePage.vue') },
      { path: '/plannerhomepage', component: () => import('pages/planner_Home.vue')},
      { path: 'dee', component: () => import('pages/DeePage.vue') },
      { path: '/Paymentpage', component: () => import('pages/PaymentPage.vue')},
      { path: '/paymentgateway', component: () => import ('pages/PaymentGateway.vue')},

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
