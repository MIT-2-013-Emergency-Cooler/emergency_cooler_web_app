// License MIT

import React from 'react';

function TopMenu() {

	return (
		<div>
			<div className="ui large top fixed hidden menu">
				<div className="ui container">
					<a href="/" className="active item">Home</a>
					<a href="/about" className="item">About</a>
					<a href="/features" className="item">VTC Features </a>
					<a href="/simulation" className="item">VTC Simulation</a>
					<a href="/contact" className="item">Contact</a>
					{/*<div className="right menu">*/}
					{/*	<div className="item">*/}
					{/*		<a className="ui button">Log in</a>*/}
					{/*	</div>*/}
					{/*	<div className="item">*/}
					{/*		<a className="ui primary button">Sign Up</a>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	)
}

export default TopMenu;
