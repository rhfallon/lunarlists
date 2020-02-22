import React, { Component } from 'react';
import './App.css';
import Birthchart from './components/Birthchart';
import List from './components/List';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Button } from 'antd';

class App extends Component {
   render() {
      return (
	<div className='app'>
        	<h1>Lunar Lists</h1>
		<h2>Wholesome recommendations for your day...based on your birth chart</h2>
	
		<BrowserRouter>
			<Switch>
			  <Route path='/birthchart' component={Birthchart}></Route>
			  <Route path='/list' component={List}></Route>
			</Switch>
		</BrowserRouter>
      	</div>
      );	
   }
}

export default App;
