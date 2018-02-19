import React, { Component } from 'react';
import { BrowserRouter,Route, Match, Switch, Miss } from 'react-router';
import Map from './Map';
//import data from './Table';

// App component
class App extends Component {
  
  render() {
    return <Map /> 
   //return data
  }
}

// this component will be rendered by our <___Router>
// const App = () => (
//   <div>

//     <Switch>
//     <Route exact path='/' render={Map} />
//   <Route path='/table' render= {data} />
// </Switch>
//   </div>
// )

export default App;

