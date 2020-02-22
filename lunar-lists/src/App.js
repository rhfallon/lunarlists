import React from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import { Button } from 'antd';
import logo from './resources/LunarLists.png';

const App = () => (
	<div className='app' align='center'>
		<h1>Welcome to Lunar Lists </h1>
		<img src={logo} alt={"logo"} height='100' width='150'/>
		<h2>Wholesome recommendations for your day...based on your birth chart</h2>
        	<Navigation/>
        	<Main/>
      	</div>
);

const Navigation = () => (
	<nav>
		<Button type = "primary">
			<NavLink to='/birthchart'>Next</NavLink>
		</Button>
	</nav>
);

const Birth = () =>
<div className='birth'>
	<h1> Please Enter Your Date & Time of Birth </h1>
	<p> some nonsense </p>
	<p> etc </p>
</div>

const Main = () => (
	<Route path='/birthchart' component={Birth}></Route>
);


export default App;
