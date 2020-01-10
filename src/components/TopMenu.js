// License MIT

import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import logo from '../assets/logo192.png';


function TopMenu() {

	return (
		<div style={divStyle}>
			<Menu fixed='top' style={menuStyle} fluid widths={3}>
				<Menu.Item header style={headerStyle}>
					<Link to='/'>
						<img src={logo} className="App-logo" alt="logo" width="50" height="50"/>
					</Link>
				</Menu.Item>
				<Menu.Menu>
					<Menu.Item>
						{/*<Input icon={<Icon name='search' */}
						{/*                   link color='yellow' */}
						{/*                   bordered */}
						{/*                   inverted />} placeholder='Search...' */}
						{/*                                style={{ width: '40em' }} />*/}
					</Menu.Item>
					<Menu.Item>
						<Link to='/'>
							<p class="large black text" style={{marginRight: '1.5em', marginLeft: '0.5em'}}>
								Emergency Cooling using the Variable Temperature Cryocooler
							</p>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/about" style={{marginRight: '1.5em', marginLeft: '0.5em'}}>
							<p class="large blue text">About</p>
						</Link>
						<span/>
						<Link class="large blue text" to="/contact" style={{marginRight: '1.5em', marginLeft: '0.5em'}}>
							<p class="large blue text">Contact</p>
						</Link>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		</div>
	)
}

export default TopMenu;

const menuStyle = {
    // HTML lightgray / lightgrey
	  background: '#D3D3D3'
};

const headerStyle = {
		borderBottom: '1em'
};

const divStyle = {
	  paddingTop: '6em'
};
