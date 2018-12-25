import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Test from '@/modules/test'
const Test = () => import('@/modules/test')
const TestTwo = () => import(/* webpackChunkName: "group-test" */'@/modules/test2')
// const TestThree = () => import(/* webpackChunkName: "group-test" */'@/modules/test3')
const TestFour = () => import(/* webpackChunkName: "group-test" */'@/modules/test4')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'test1',
          name: 'test1',
          component: Test
        },
        {
          path: 'test2',
          name: 'test2',
          component: TestTwo  
        },
        // {
        //   path: 'test3',
        //   name: 'test3',
        //   component: TestThree
        // },
        {
          path: 'test4',
          name: 'test4',
          component: TestFour
        },
      ]
    }
  ]
})
