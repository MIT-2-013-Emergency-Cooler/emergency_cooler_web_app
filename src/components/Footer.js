// License MIT

import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import logo from '../../src/assets/logo192.png';

function Footer() {
		return (
				<div style={divStyle}>
						<Menu style={menuStyle} fluid widths={4}>
								<Menu.Item header>
										<p className="black text" style={{ marginRight: '1.5em', marginLeft: '2.5em' }}>
											Made in Cambridge, MA
										</p>
								</Menu.Item>
								<Menu.Item>
										<p className="black text" style={{ marginRight: '1.5em', marginLeft: '2.5em' }}>
												3 Ames Street, Cambridge MA 02142
										</p>
								</Menu.Item>
								<Menu.Item>
									<Link className="large blue text" to="/about" style={{marginRight: '1.5em', marginLeft: '2.5em'}}>
										<p className="large blue text">About</p>
									</Link>
								</Menu.Item>
								<Menu.Item>
									<Link className="large blue text" to="/contact" style={{marginRight: '1.5em', marginLeft: '2.5em'}}>
										<p className="large blue text">Contact</p>
									</Link>
								</Menu.Item>
						</Menu>
				</div>
		)
}

export default Footer;

const menuStyle = {
		// HTML lightgray / lightgrey
		background: '#D3D3D3'
};

const divStyle = {
		paddingTop: '6em'
};
