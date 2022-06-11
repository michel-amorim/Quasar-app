import { CADASTRO, ESQUECISENHA, NOT_FOUND, AUTENTICADO } from '../router/constants/index'

const routes = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/login.vue') },
      {
        path: ESQUECISENHA,
        name: 'esqueciSenha',
        component: () => import('pages/esqueciSenha.vue')
      },
      {
        path: CADASTRO,
        name: 'cadastro',
        component: () => import('pages/cadastro.vue')
      }
    ]
  },
  {
    path: AUTENTICADO,
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'home', component: () => import('pages/Index.vue') }]
  },
  {
    path: NOT_FOUND,
    component: () => import('pages/Error404.vue')
  }
]

export default routes
