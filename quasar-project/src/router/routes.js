const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/DeeLayout.vue'),
    children: [
      { path: '/aboutus', component: () => import('pages/AboutUs.vue') },
      { path: '/feedback', component: () => import('src/pages/FeedBake.vue') },
      { path: '/help&support', component: () => import('pages/HelpAndSupport.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/homepage', component: () => import('pages/HomePage.vue') },
      { path: '/plannerhomepage', component: () => import('pages/planner_Home.vue')},
      { path: '/dee', component: () => import('pages/DeePage.vue') },
      { path: '/busticketbookingpage', component: () => import('pages/BusTicketBooking_3rdPage.vue')},
      { path: '/schedular-assign-crew', component: () => import('pages/Sch_AssignCrew.vue')},
      { path: '/schedular-available-crew', component: () => import('pages/Sch_AvailableCrew.vue')},
      { path: '/schedular-manage-crew', component: () => import('pages/Sch_ManageCrew.vue')},
      { path: '/schedular-crew-details', component: () => import('pages/Sch_crewDetails.vue')},
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
