import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import NavigationBar from './components/Navbar/Navbar';
import { Context } from './Context/Auth';
import Discussions from './pages/Discussions/Discussions';
import DebateFeed from './pages/DebateFeed/DebateFeed';

const App = () => {
	const {
		auth: { logged },
	} = useContext(Context);
	if (logged) {
		return (
			<Router>
				<NavigationBar />
				<Switch>
					<Route path='/discussion' component={Discussions} />
					<Route path='/summaries' component={DebateFeed} />
					<Route path='/' component={Home} />
				</Switch>
			</Router>
		);
	}
	return (
		<Router>
			<NavigationBar />
			<Switch>
				<Route path='/signin' component={SignIn} />
				<Route path='/signup' component={SignUp} />
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
