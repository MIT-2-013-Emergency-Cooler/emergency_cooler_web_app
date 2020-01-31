// MIT License

import React from 'react';
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";

function About() {
	return(
		<div>
			<TopMenu/>
			<Container text style={{marginTop: '5em', marginBottom: '1em'}}>
				<Header as='h1' style={{textAlign: 'center'}}>
					About the VTC
				</Header>
			</Container>
			<Container style={{marginTop: '5em', marginBottom: '1em'}}>
				<Header as='h2'>What do you do here? </Header>
				<p>
					The VTC is a Cryocooler.
				</p>
			</Container>
			<Footer/>
		</div>
	);
}

export default About;