import Login from 'layouts/Login'
import AdminLogin from 'pages/AdminLogin'
import ForgotPassword from 'pages/ForgotPassword'
import RecoverPassword from 'pages/RecoverPassword'

const web = [
  // ADMIN LOGIN
  {
    path: '/acesso-admin',
    component: Login,
    children: [{ path: '', component: AdminLogin, name: 'AdminLogin', meta: { template: 'login' } }]
  }
]
export default web
