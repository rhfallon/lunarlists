import React from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';

const App = () => (
	<div className='app'>
        	<h1>React Router Demo</h1>
        	<Navigation />
        	<Main />
      	</div>
);

const Navigation = () => (
	<nav>
		<ul>
			<NavLink to='/birthchart'>Next</NavLink>
		</ul>
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
