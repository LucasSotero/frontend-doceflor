import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import ProductEdit from '@/components/product/product-edit'
import ProductShow from '@/components/product/product-show'
import ProductInsert from '@/components/product/product-insert'
import ProductDatails from '@/components/product/product-details'

import clientEdit from '@/components/client/client-edit'
import clientShow from '@/components/client/client-show'
import clientInsert from '@/components/client/client-insert'
import clientDatails from '@/components/client/client-details'

import sale from '@/components/sale/Sale'
import saleShow from '@/components/sale/sale-show'
import saleDatails from '@/components/sale/sale-details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sales',
      component: saleShow
    },
    {
      path: '/sales/view/:id',
      component: saleDatails
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
      path: '/products/details/:id',
      component: ProductDatails
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
      path: '/clients/details/',
      component: clientDatails
    },
    {
      path: '/sale/',
      component: sale
    }
  ]
})
