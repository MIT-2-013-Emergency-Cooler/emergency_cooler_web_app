// MIT License

import React from 'react';
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";
import Chat from "../components/Chat";

class Simulation extends React.Component {
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
						VTC Simulation
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
				<Container>
					<Header as='h2'>Determining thermal leakage rate for the VTC </Header>
					<p>
						The rate at which the VTC heats up against active cooling must be consistently maintained.
					</p>
					<div className="ui input">
						<p>Steady state storage temperature: </p>
						<input type="text" placeholder="Integer"/>
					</div>
					<div className="ui input">
						<p>Ambient temperature: </p>
						<input type="text" placeholder="Integer"/>
					</div>
				</Container>
				<Container style={{marginTop: '5em', marginBottom: '1em'}}>
					<Header as='h2'>Modeling reaction to user input </Header>
					<p>
						The VTC is a cryocooler capable of bringing a storage volume down from ambient temperature to cryogenic
						conditions in less than a day.
					</p>
					<p>
						{this.state.inputValue}
					</p>
				</Container>
				<Container>
					<Chat/>
				</Container>
				<Footer/>
			</div>

		);
	}
}

export default Simulation;
