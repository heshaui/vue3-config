import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // title: '专利分析主页-技术全境',
      component: () => import('../views/search.vue')
    },
    {
      path: '/navigation',
      name: 'navigation',
      // title: '技术导航概览', // 付费版
      component: () => import('../views/navigation.vue')
    },
    // {
    //   path: '/pay',
    //   name: 'pay',
    //   // title: '支付',
    //   component: () => import('../views/pay.vue')
    // },
    {
      path: '/authTrend',
      name: 'authTrend',
      // title: '申请授权趋势分析', // 企业通用-折线双柱
      component: () => import('../views/authTrend.vue')
    },
    {
      path: '/patentType',
      name: 'patentType',
      // title: '专利类型分析', // 企业通用-环形
      component: () => import('../views/patentType.vue')
    },
    {
      path: '/simpleLegalStatus',
      name: 'simpleLegalStatus',
      // title: '简单法律状态分析', // 企业通用-饼图
      component: () => import('../views/simpleLegalStatus.vue')
    },
    {
      path: '/targetMarketCountry',
      name: 'targetMarketCountry',
      // title: '目标市场国分析', // 企业通用: 地域分布趋势分析-地图
      component: () => import('../views/targetMarketCountry.vue')
    },
    {
      path: '/technologySourceCountry',
      name: 'technologySourceCountry', 
      // title: '技术来源国申请趋势', 折线
      component: () => import('../views/technologySourceCountry.vue')
    },
    {
      path: '/applyRanking',
      name: 'applyRanking', 
      // title: '省市申请排名', 环形
      component: () => import('../views/applyRanking.vue')
    },
    {
      path: '/applyTrend',
      name: 'applyTrend',
      // title: '省市申请趋势', 折线
      component: () => import('../views/applyTrend.vue')
    },
    {
      path: '/technicalComposition',
      name: 'technicalComposition',
      // title: '技术构成分析', // 企业通用: 企业技术构成-矩阵
      component: () => import('../views/technicalComposition.vue')
    },
    {
      path: '/technicalApplyTrend',
      name: 'technicalApplyTrend',
      // title: '技术分组申请趋势', // 企业通用-折线
      component: () => import('../views/technicalApplyTrend.vue')
    },
    {
      path: '/technicalApplySituation',
      name: 'technicalApplySituation',
      // title: '重要地域技术分支申请情况', // 重要技术分支主要申请人分布 // 企业通用: 重要技术地域分布-气泡
      component: () => import('../views/technicalApplySituation.vue')
    },
    {
      path: '/technicalApplyAnalysis',
      name: 'technicalApplyAnalysis',
      // title: '领域内主要申请人分析', //-横柱
      component: () => import('../views/technicalApplyAnalysis.vue')
    },
    {
      path: '/newEntry',
      name: 'newEntry',
      // title: '新进入者分析', 折线
      component: () => import('../views/newEntry.vue')
    },
    {
      path: '/cooperateApply',
      name: 'cooperateApply',
      // title: '合作申请分析', 关系图
      component: () => import('../views/cooperateApply.vue')
    },
    {
      path: '/mainInventor',
      name: 'mainInventor',
      // title: '主要发明人分析', // 企业通用: 发明人分析-横柱
      component: () => import('../views/mainInventor.vue')
    },
    {
      path: '/inventorTime',
      name: 'inventorTime',
      // title: '发明人活跃时间分析', 网格
      component: () => import('../views/inventorTime.vue')
    },
    {
      path: '/inventorDirection',
      name: 'inventorDirection',
      // title: '发明人研发方向分析', // 共同研发技术方向-气泡
      component: () => import('../views/inventorDirection.vue')
    },
    {
      path: '/inventorTeam',
      name: 'inventorTeam',
      // title: '发明人团队分析', 关系图
      component: () => import('../views/inventorTeam.vue')
    },
    {
      path: '/jointApplicant',
      name: 'jointApplicant',
      // title: '共同申请人', 横柱
      component: () => import('../views/jointApplicant.vue')
    },
    {
      path: '/mostQuote',
      name: 'mostQuote',
      // title: '最多被引用专利', // 企业通用: 被引用最多的专利-横柱
      component: () => import('../views/mostQuote.vue')
    },
    {
      path: '/keyPatentFamily',
      name: 'keyPatentFamily',
      // title: '重点专利家族', // 企业通用-横柱
      component: () => import('../views/keyPatentFamily.vue')
    },
    {
      path: '/claimsNumber',
      name: 'claimsNumber',
      // title: '权利要求数', // 企业通用-横柱
      component: () => import('../views/claimsNumber.vue')
    },
    {
      path: '/companySearch',
      name: 'companySearch',
      // title: '企业分析概况', 搜索
      component: () => import('../views/companySearch.vue')
    },
    {
      path: '/companyOverview',
      name: 'companyOverview',
      // title: '企业分析概况', 看板
      component: () => import('../views/companyOverview.vue')
    },
    {
      path: '/rankingAnalysis',
      name: 'rankingAnalysis',
      // title: '地域排名分析', 折线
      component: () => import('../views/rankingAnalysis.vue')
    },
    {
      path: '/technicalRouteAnalysis',
      name: 'technicalRouteAnalysis',
      // title: '技术路线分析', 表格
      component: () => import('../views/technicalRouteAnalysis.vue')
    },
    {
      path: '/newTechnicalAnalysis',
      name: 'newTechnicalAnalysis',
      // title: '新兴技术分析', 气泡
      component: () => import('../views/newTechnicalAnalysis.vue')
    },
    {
      path: '/patentTransferInOut',
      name: 'patentTransferInOut',
      // title: '专利转入转出', 横柱
      component: () => import('../views/patentTransferInOut.vue')
    }
  ]
})

export default router
