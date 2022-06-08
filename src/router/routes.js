const routes = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/login.vue') },
      {
        path: '/esqueci-minha-senha',
        name: 'esqueciSenha',
        component: () => import('pages/esqueciSenha.vue')
      },
      {
        path: '/cadastro',
        name: 'cadastro',
        component: () => import('pages/cadastro.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'home', component: () => import('pages/Index.vue') }]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
