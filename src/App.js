import React from 'react';
import {subRoutes} from './router';
import {Route,Redirect,Switch, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import actionCreator from './components/home/actionCreator';
import {
  HomeOutlined,
  UnorderedListOutlined,
  ShoppingOutlined,
  UserOutlined
} from '@ant-design/icons';
import './asset/css/home.scss';

class App extends React.Component{
  render(){
    return (
      <div style={{height:'100%'}}>
        <Switch>
          {
            subRoutes.map((item)=>{
              return <Route key={item.path} path={item.path} component={item.component} />
            })
          }
          <Redirect from='/app' to='/app/home' exact />
          
        </Switch>
        <footer className='botNav'>
            <ul>
              <NavLink to='/app/home' className='li'><HomeOutlined className='iconFont' />首页</NavLink>
              <NavLink to='/app/category'className='li'><UnorderedListOutlined className='iconFont' />分类</NavLink>
              <NavLink to='/app/shop'className='li'><ShoppingOutlined className='iconFont' />购物车</NavLink>
              <NavLink to='/app/user'className='li'><UserOutlined className='iconFont' />个人中心</NavLink>
            </ul>
        </footer>
      </div>
    );
  }
}
const mapState=(state)=>{
  return{
      state
  }
}
export default connect(mapState,actionCreator)(App);
