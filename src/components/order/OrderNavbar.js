import Navbar from '../Navbar'

class OrderNavBar extends Navbar{
  

    constructor(props) {
      super(props);
    }
     
     
    render(){
      return  super.render();
    }
}

OrderNavBar.defaultProps = {
  title: 'Order'
}
module.exports = OrderNavBar