import { CADASTRO, ESQUECI_SENHA, NOT_FOUND, HOME, LOGIN } from '../router/constants'

const routes = [
  {
    path: LOGIN,
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/login.vue') },
      {
        path: ESQUECI_SENHA,
        name: 'esqueci-senha',
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
    path: HOME,
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'home', component: () => import('pages/Index.vue') }]
  },
  {
    path: NOT_FOUND,
    component: () => import('pages/Error404.vue')
  }
]

export default routes
