import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { BrowserRouter,Route,Router, browserHistory, HashRouter, hashHistory, Switch} from 'react-router-dom';
import App from './App.js';
import './index.css'; // postCSS import of CSS module
//import data from './Table'
import tableRender from './tableRender'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
    <Route path="/" component={App}/>
    <Route path="/table" component={tableRender}/>
    </Switch>
  </BrowserRouter>

), document.getElementById('root'));

