// MIT License

import React from 'react';
import TopMenu from "../../../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../../../components/Footer";

class Controls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
	}
	render() {
		return (
			<div>
				<TopMenu/>
				<Container text style={{marginTop: '10em', marginBottom: '1em'}}>
					<Header as='h1' style={{textAlign: 'center'}}>
						VTC Controls
					</Header>
				</Container>
				<Container>
					<Header as='h2'>Capacity of the VTC </Header>
					<p>
						The rate at which the VTC heats up against active cooling must be consistently maintained.
					</p>
					<div className="ui input">
						<p>Number of vials: </p>
						<input type="text" placeholder="Integer"/>
					</div>
				</Container>
				<Footer/>
			</div>

		);
	}
}

export default Controls;
