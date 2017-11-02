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
        document.querySelector('title').innerHTML='Home'
        Modals.hideIndicator()
      })
    }
  },

  childRoutes: [{
    path: 'product',
    getComponents(nextState, cb) {
      Modals.showIndicator()
      Promise.all([
        import('./components/product/ProductNavbar'),
        import('./components/product/ProductPage')
      ]).then( ([navbar, page])  => {
          cb(null, {
            navbar: hideNavbar ? null : navbar,
            page: page
          })
          document.querySelector('title').innerHTML='Product'
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
          document.querySelector('title').innerHTML='Product'
          Modals.hideIndicator()
      })
    }
  }]

}

 
export default rootRoute;