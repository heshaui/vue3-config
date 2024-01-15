import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      title: '搜索',
      component: () => import('../views/search.vue')
    },
    {
      path: '/navigation',
      name: 'home',
      title: '技术导航概览',
      component: () => import('../views/navigation.vue')
    },
    {
      path: '/pay',
      name: '支付',
      component: () => import('../views/pay.vue')
    },
    {
      path: '/authTrend',
      name: 'home',
      title: '申请授权趋势分析'
      component: () => import('../views/authTrend.vue')
    },
    {
      path: '/patentType',
      name: 'home',
      title: '专利类型分析'
      component: () => import('../views/patentType.vue')
    },
    {
      path: '/simpleLegalStatus',
      name: 'home',
      title: '简单法律状态分析'
      component: () => import('../views/simpleLegalStatus.vue')
    },
    {
      path: '/targetMarketCountry',
      name: 'home',
      title: '目标市场国分析'
      component: () => import('../views/targetMarketCountry.vue')
    },
    {
      path: '/technologySourceCountry',
      name: 'home', 
      title: '技术来源国申请趋势'
      component: () => import('../views/technologySourceCountry.vue')
    },
    {
      path: '/applyRanking',
      name: 'home', 
      title: '省市申请排名'
      component: () => import('../views/applyRanking.vue')
    },
    {
      path: '/applyRanking',
      name: 'home', 
      title: '省市申请排名'
      component: () => import('../views/applyRanking.vue')
    },
    {
      path: '/applyTrend',
      name: 'home',
      title: '省市申请趋势'
      component: () => import('../views/applyTrend.vue')
    },
    {
      path: '/technicalComposition',
      name: 'home',
      title: '技术构成分析'
      component: () => import('../views/technicalComposition.vue')
    },
    {
      path: '/technicalApplyTrend',
      name: 'home',
      title: '技术分组申请趋势'
      component: () => import('../views/technicalApplyTrend.vue')
    },
    {
      path: '/technicalApplySituation',
      name: 'home',
      title: '重要地域技术分支申请情况'
      component: () => import('../views/technicalApplySituation.vue')
    },
    {
      path: '/applicantDistribution',
      name: 'home',
      title: '重要技术分支主要申请人分布'
      component: () => import('../views/applicantDistribution.vue')
    },
    {
      path: '/newEntry',
      name: 'home',
      title: '新进入者分析'
      component: () => import('../views/newEntry.vue')
    },
    {
      path: '/cooperateApply',
      name: 'home',
      title: '合作申请分析'
      component: () => import('../views/cooperateApply.vue')
    },
    {
      path: '/mainInventor',
      name: 'home',
      title: '主要发明人分析'
      component: () => import('../views/mainInventor.vue')
    },
    {
      path: '/mostQuote',
      name: 'home',
      title: '最多被引用专利'
      component: () => import('../views/mostQuote.vue')
    },
    {
      path: '/keyPatentFamily',
      name: 'home',
      title: '重点专利家族'
      component: () => import('../views/keyPatentFamily.vue')
    },
    {
      path: '/claimsNumber',
      name: 'home',
      title: '权利要求数'
      component: () => import('../views/claimsNumber.vue')
    },
    {
      path: '/company',
      name: 'home',
      title: '企业分析概况'
      component: () => import('../views/company.vue')
    },
    {
      path: '/company',
      name: 'home',
      title: '企业分析概况'
      component: () => import('../views/company.vue')
    }
    
  ]
})

export default router
