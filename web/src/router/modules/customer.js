// 客户管理的路由
import Layout from '@/views/layout/customerLayout'

const customerRouter = {
  path: '/crm',
  component: Layout,
  redirect: '/crm/workbench',
  name: 'crm',
  hidden: true,
  meta: {
    requiresAuth: true,
    title: '客户管理',
    index: 0,
    type: 'crm'
  },
  children: [{
    path: 'workbench', // 工作台
    component: () => import('@/views/customermanagement/workbench/workbench'),
    meta: {
      requiresAuth: false,
      title: '仪表盘',
      icon: 'dashboard'
    }
  }]
}

export default customerRouter