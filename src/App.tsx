/*
 * @Author: XuYang 
 * @Date: 2021-05-06 11:11:34 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-11 16:06:44
 */
import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import Login from './view/Login';
import Page404 from './view/404';
import Report from './view/Report';

const App: FC = () => (
    <BrowserRouter>
      <Switch>
        {/* 登录 */}
        <Route path='/login' exact component={Login}></Route>
        {/* 首页 */}
        <Route path='/'>
            {/* 主页面 */}
            <Home>
              <Switch>
                <Route path='/home' exact component={Report}></Route>
                <Route path='*' component={Page404}></Route>
              </Switch>
            </Home>
        </Route>
        {/* 重定向 */}
        <Redirect to='/home'></Redirect>
      </Switch>
    </BrowserRouter>
);

export default App;