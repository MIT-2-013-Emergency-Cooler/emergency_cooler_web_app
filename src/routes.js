import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Simulation from "./pages/Simulation";

export const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/simulation" component={Simulation} />
		</Switch>
	</Router>
);
