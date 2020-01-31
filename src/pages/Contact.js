// MIT License

import React from 'react';
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";

function Contact() {
	return(
		<div>
			<TopMenu/>
			<Container text style={{marginTop: '5em', marginBottom: '1em'}}>
				<Header as='h1' style={{textAlign: 'center'}}>
					Contact the VTC
				</Header>
			</Container>
			<Container style={{marginTop: '5em', marginBottom: '1em'}}>
				<Header as='h2'>What do you do here? </Header>
				<p>
					Contact J. Miske at jacobmiske@gmail.com
				</p>
			</Container>
		</div>
	);
}

export default Contact;