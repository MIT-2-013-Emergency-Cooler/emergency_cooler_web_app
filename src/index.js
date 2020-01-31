import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
