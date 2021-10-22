import HomeAdmin from 'pages/admin/Home.vue'
import Admin from 'layouts/Admin'

const admin = [
  // HOME
  {
    path: '/admin/home',
    component: Admin,
    children: [{ path: '', component: HomeAdmin, name: 'AdminHome', meta: { template: 'admin', requiresAdminAuth: true } }]
  }

]
export default admin
