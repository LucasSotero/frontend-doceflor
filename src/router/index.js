import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import ProductEdit from '@/components/product/product-edit'
import ProductShow from '@/components/product/product-show'
import ProductInsert from '@/components/product/product-insert'

import clientEdit from '@/components/client/client-edit'
import clientShow from '@/components/client/client-show'
import clientInsert from '@/components/client/client-insert'

import sales from '@/components/sale/Sale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/products',
      name: 'products',
      component: ProductShow
    },
    {
      path: '/products/view/:id',
      component: ProductEdit
    },
    {
      path: '/products/new/',
      component: ProductInsert
    },
    {
      path: '/clients',
      name: 'clients',
      component: clientShow
    },
    {
      path: '/clients/view/:id',
      component: clientEdit
    },
    {
      path: '/clients/new/',
      component: clientInsert
    },
    {
      path: '/sales/',
      component: sales
    }
  ]
})
