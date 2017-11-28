import Vue from 'vue'
import Router from 'vue-router'


import HomeView from '../components/home/HomeView.vue'
import HomeViewSao from '../components/home/HomeView-Sao.vue'
import HomeViewCheng from '../components/home/HomeView-Cheng.vue'

import JiangView from '../components/jiang/JiangView.vue'
import JiangViewContent from '../components/jiang/JiangView-Content.vue'

import MeView from '../components/me/MeView.vue'
import MeViewTui from '../components/me/MeView-tui.vue'
import MeViewJin from '../components/me/MeView-jin.vue'
import MeViewGe from '../components/me/MeView-ge.vue'
import MeViewMo from '../components/me/MeView-Wo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'HomeView',
      component: HomeView
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/HomeViewSao',
      name: 'HomeViewSao',
      component: HomeViewSao
    },
    {
      path: '/HomeViewCheng',
      name: 'HomeViewCheng',
      component: HomeViewCheng
    }
    
    
    ,{
    	path: '/JiangView',
      name: 'JiangView',
      component: JiangView
    },
	    {
	    	path: '/JiangViewContent',
	      name: 'JiangViewContent',
	      component: JiangViewContent
	    },
	    
	    
	    
	    
    {
    	path: '/MeView',
      name: 'MeView',
      component: MeView
    },
	    {
	    	path: '/MeViewTui',
	      name: 'MeViewTui',
	      component: MeViewTui
	    },
	    {
	    	path: '/MeViewJin',
	      name: 'MeViewJin',
	      component: MeViewJin
	    },
	    {
	    	path: '/MeViewGe',
	      name: 'MeViewGe',
	      component: MeViewGe
	    },
	    {
	    	path: '/MeViewMo',
	      name: 'MeViewMo',
	      component: MeViewMo
	    }
	    
    
  ]
})
