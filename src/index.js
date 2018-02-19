import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { BrowserRouter,Route,Router, browserHistory, HashRouter, hashHistory, Switch} from 'react-router-dom';
import App from './App.js';
import './index.css'; // postCSS import of CSS module
import Table from './Table';
import tableRender from './tableRender'

ReactDOM.render((
  <HashRouter>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/table" component={Table}/>
    </Switch>
  </HashRouter>

), document.getElementById('root'));

//console.log(data)

