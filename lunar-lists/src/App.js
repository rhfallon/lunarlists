import React, { Component } from 'react';
import './App.css';
import Birthchart from './components/Birthchart';
import List from './components/List';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './resources/LunarLists.png';
import './index.css'
//import { Button } from 'antd';

class App extends Component {
   render() {
      return (
	<div className="parent">
		 <div className="bg"></div>
		 <div className='app' align='center'>
				    <h1>Welcome to Lunar Lists </h1>

				    <img src={logo} alt={"logo"} height='100' width='150'/>

				    <h2>Wholesome recommendations for your day...based on your birth chart</h2>
	
		        <BrowserRouter>
			        <Switch>
			          <Route path='/birthchart' component={Birthchart}></Route>
			          <Route path='/list' component={List}></Route>
			        </Switch>
		        </BrowserRouter>
      	</div>
	 </div>
      );	
   }
}

export default App;
