import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "../components/Users";
import './App.scss';
import '../index.scss';
import Sort from "../components/Sort";
import UserProfile from "../components/UserProfile";


const App = () => (
	<div className={'App'}>
		<Router>
			<Sort/>
			<Routes>
				<Route path = '/' element={<Users/>}/>
				<Route path = 'UserProfile' element={<UserProfile/>}/>
			</Routes>
		</Router>
	</div>

);

export default App;
