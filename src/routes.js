import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Simulation from "./pages/Simulation";
import Features from "./pages/Features";
import Structures from "./pages/features/Structures/Structures";
import Cooling from "./pages/features/Cooling/Cooling";
import Controls from "./pages/features/Controls/Controls";

export const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/features" component={Features} />
			<Route exact path="/features/structures" component={Structures} />
			<Route exact path="/features/cooling" component={Cooling} />
			<Route exact path="/features/controls" component={Controls} />
			<Route exact path="/simulation" component={Simulation} />
		</Switch>
	</Router>
);
