// License MIT

import React from 'react'

function Footer() {
		return (
				<div>
					<div className="ui inverted vertical footer segment">
						<div className="ui container">
							<div className="ui stackable inverted divided equal height stackable grid">
								<div className="three wide column">
									<h4 className="ui inverted header">About VTC</h4>
									<div className="ui inverted link list">
										<a href="/contact" className="item">Sitemap</a>
										<a href="/contact" className="item">Contact Us</a>
										<a href="/contact" className="item">VTC Staff</a>
										<a href="/contact" className="item">White Paper</a>
									</div>
								</div>
								<div className="three wide column">
									<h4 className="ui inverted header">Services</h4>
									<div className="ui inverted link list">
										<a href="/contact" className="item">Interest to Purchase</a>
										<a href="/contact" className="item">FAQ</a>
										<a href="/contact" className="item">Open Access</a>
										<a href="/contact" className="item">Random Facts</a>
									</div>
								</div>
								<div className="seven wide column">
									<h4 className="ui inverted header">The Mission</h4>
									<p>
										Sample preservation is difficult in many parts of the globe.
									</p>
									<p>
										Cryogenic systems suffer from short lifetimes or large power draw.
									</p>
									<p>
										A low power draw, cryogenic storage solution would improve sampling ability.
									</p>
								</div>
							</div>
						</div>
					</div>
						{/*<Menu style={menuStyle} fluid widths={4}>*/}
						{/*		<Menu.Item header>*/}
						{/*				<p className="black text" style={{ marginRight: '1.5em', marginLeft: '2.5em' }}>*/}
						{/*					Made in Cambridge, MA*/}
						{/*				</p>*/}
						{/*		</Menu.Item>*/}
						{/*		<Menu.Item>*/}
						{/*				<p className="black text" style={{ marginRight: '1.5em', marginLeft: '2.5em' }}>*/}
						{/*						3 Ames Street, Cambridge MA 02142*/}
						{/*				</p>*/}
						{/*		</Menu.Item>*/}
						{/*		<Menu.Item>*/}
						{/*			<Link className="large grey text" to="/about" style={{marginRight: '1.5em', marginLeft: '2.5em'}}>*/}
						{/*				<p className="large grey text">About</p>*/}
						{/*			</Link>*/}
						{/*		</Menu.Item>*/}
						{/*		<Menu.Item>*/}
						{/*			<Link className="large grey text" to="/contact" style={{marginRight: '1.5em', marginLeft: '2.5em'}}>*/}
						{/*				<p className="large grey text">Contact</p>*/}
						{/*			</Link>*/}
						{/*		</Menu.Item>*/}
						{/*</Menu>*/}
				</div>
		)
}

export default Footer;

// const footerStyle = {
// 	position: "fixed",
// 	bottom: 0
// };
