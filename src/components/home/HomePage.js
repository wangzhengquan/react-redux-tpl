import React  from 'react';
import {Link} from 'react-router'
import AnimationPage from '../Page'
import classNames from 'classnames';
import {List} from 'react-ui/lists'
require('react-ui/resources/less/content-block.less')
require('react-ui/resources/less/forms.less')

class HomePage extends AnimationPage{
  constructor(props) {
    super(props);
  }

   
  render(){
    return (
    <div className={classNames('page', this.props.className)} data-page={this.props.pageName}>
      <div className="page-content">
        <div className="content-block-title">Nav</div>
        <List>
          <Link to="actList" className="item-link">
            <div className="item-content">
              <div className="item-inner">
                <div className="item-title">活动列表</div>
              </div>
            </div>
          </Link>

          <Link to="activity" className="item-link">
            <div className="item-content">
              <div className="item-inner">
                <div className="item-title">活动详情</div>
              </div>
            </div>
          </Link>

          <Link to="org" className="item-link">
            <div className="item-content">
              <div className="item-inner">
                <div className="item-title">社团详情</div>
              </div>
            </div>
          </Link>
        </List>

      </div>
    </div>
    );
  }

  handleClickGeneratedContent(e){
    e.preventDefault()
    this.generatePage()
  }
  
}

module.exports = HomePage
