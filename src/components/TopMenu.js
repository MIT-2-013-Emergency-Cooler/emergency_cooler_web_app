// License MIT

import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import logo from '../assets/logo192.png';

function TopMenu() {

	return (
		<div style={divStyle}>
			<Menu fixed='top' style={menuStyle} fluid widths={4}>
				<Menu.Item>
					<Link to='/'>
						<p class="large black text" style={{marginRight: '1.5em', marginLeft: '1.5em'}}>
							Variable Temperature Cryocooler
						</p>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/about" style={{marginRight: '1.5em', marginLeft: '1.5em'}}>
						<p class="large blue text">About</p>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link class="large blue text" to="/contact" style={{marginRight: '1.5em', marginLeft: '1.5em'}}>
						<p class="large blue text">Contact</p>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/'>
						<p class="large black text" style={{marginRight: '1.5em', marginLeft: '1.5em'}}>
							2.014 MIT
						</p>
					</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default TopMenu;

const menuStyle = {
	// HTML lightgray / lightgrey
	background: '#D3D3D3'
};

const divStyle = {
	paddingTop: '1em',
	// HTML lightgray / lightgrey
	background: '#D3D3D3'
};

// const headerStyle = {
// 	borderBottom: '1em'
// };