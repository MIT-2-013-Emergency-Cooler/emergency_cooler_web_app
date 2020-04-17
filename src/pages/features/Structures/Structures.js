// MIT License

import React from 'react';
import TopMenu from "../../../components/TopMenu";
import {Container, Image, Header} from "semantic-ui-react";
import Footer from "../../../components/Footer";
import CTflange from "../../../assets/part_drawings/c0012mountflange.png";

class Structures extends React.Component {
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
						VTC Structures
					</Header>
				</Container>

				<Container>
					<Header as='h2' style={{textAlign: 'left'}}>
						Main structural components
					</Header>
					<Image centered src={CTflange} size='large' alt="Cryotel CT holding flange"></Image>
				</Container>
				<Footer/>
			</div>
		);
	}
}

export default Structures;
