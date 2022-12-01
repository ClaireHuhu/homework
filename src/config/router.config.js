const routerConfig = [
    {
      path: '/',
      name: 'Home',
      redirect: '/sdk_management',
    },
    {
      path: '/user_profile',
      name: 'UserProfile',
      component: {render: (h)=>{return h('div',{},['We are curently working on this featrue and will launch soon.'])}},
      meta: {
          displayName: 'User Profile',
          icon: 'el-icon-user-solid'
      }
    },
    {
      path: '/sdk_management',
      name: 'SDKManagement',
      component: () => import(/* webpackChunkName: "SDKManagement" */ '../views/SDKManagement.vue'),
      meta: {
        displayName: 'SDK Management',
        icon: 'el-icon-s-operation'
      }
    },
    {
      path: '/dashboards',
      name: 'Dashboards',
      component: {render: (h)=>{return h('div',{},['We are curently working on this featrue and will launch soon.'])}},
      meta: {
        displayName: 'Dashboards',
        icon: 'el-icon-s-platform'
      }
    },
    {
      path: '/terms_and_conditions',
      name: 'TermsAndConditions',
      component: {render: (h)=>{return h('div',{},['We are curently working on this featrue and will launch soon.'])}},
      meta: {
        displayName: 'Terms & Conditions',
        icon: 'el-icon-s-order'
      }
    }
  ]

  export default routerConfig