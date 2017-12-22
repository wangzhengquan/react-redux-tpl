import Modals from 'react-ui/modals'

var  hideNavbar = false

const rootRoute = {
  path: '/',
  component: require('./components/View'),
  indexRoute: {
    //懒加载处理，访问该页面时才会加载相关资源
    getComponents(nextState, cb) {
      //显示loadding
      Modals.showIndicator()

      //webpack split打包处理方式
      Promise.all([
        import('./components/home/HomeNavbar'),
        import('./components/home/HomePage')
      ]).then( ([navbar, page]) => {
        cb(null, {
          navbar: hideNavbar ? null : navbar,
          page: page

        })
        document.querySelector('title').innerHTML='一起嗨'
        Modals.hideIndicator()
      })
    }
  },

  childRoutes: [{
    path: 'actList',
    getComponents(nextState, cb) {
      Modals.showIndicator()
      Promise.all([
        import('./components/actList/ActListNavbar'),
        import('./components/actList/ActListPage')
      ]).then( ([navbar, page])  => {
          cb(null, {
            navbar: hideNavbar ? null : navbar,
            page: page
          })
          // document.querySelector('title').innerHTML='Product'
          Modals.hideIndicator()
      })
    }
  }, {
    path: 'activity',
    getComponents(nextState, cb) {
      Modals.showIndicator()
      Promise.all([
        import('./components/activity/ActivityNavbar'),
        import('./components/activity/ActivityPage')
      ]).then( ([navbar, page])  => {
          cb(null, {
            navbar: hideNavbar ? null : navbar,
            page: page
          })
          // document.querySelector('title').innerHTML='Product'
          Modals.hideIndicator()
      })
    }
  },{
    path: 'org',
    getComponents(nextState, cb) {
      Modals.showIndicator()
      Promise.all([
        import('./components/org/OrgNavbar'),
        import('./components/org/OrgPage')
      ]).then( ([navbar, page])  => {
          cb(null, {
            navbar: hideNavbar ? null : navbar,
            page: page
          })
          // document.querySelector('title').innerHTML='Product'
          Modals.hideIndicator()
      })
    }
  }, {
    path: 'order',
    getComponents(nextState, cb) {
      Modals.showIndicator()
      Promise.all([
        import('./components/order/OrderNavbar'),
        import('./components/order/OrderPage')
      ]).then( ([navbar, page])  => {
          cb(null, {
            navbar: hideNavbar ? null : navbar,
            page: page
          })
          // document.querySelector('title').innerHTML='Product'
          Modals.hideIndicator()
      })
    }
  }]

}

 
export default rootRoute;