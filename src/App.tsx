/*
 * @Author: XuYang 
 * @Date: 2021-05-06 11:11:34 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-06 11:22:01
 */
import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import Login from './view/Login';


const App: FC = () => (
    <BrowserRouter>    
      <Route path='/' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
    </BrowserRouter>
);

export default App;