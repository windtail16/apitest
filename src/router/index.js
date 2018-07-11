import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inline from '~/common/Inline';

import ApiTest from "~/common/ApiTest";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Inline
    },
    {      
      path: '/apitest',
      name: 'ApiTest',
      component: ApiTest,
      children: [
        {
          path: ':api',
          component: {
            template: '<div>Api id: {{$route.params.api}}</div>'
          } 
        }
      ]
    }
  ],
  mode: 'history'
})


