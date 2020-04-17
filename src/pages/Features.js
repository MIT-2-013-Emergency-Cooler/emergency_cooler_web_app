// MIT License

import React from 'react';
import TopMenu from "../components/TopMenu";
import {Container, Grid, Header} from "semantic-ui-react";
import Footer from "../components/Footer";
import VTCfigure from "../assets/figNewDesign.png";

class Features extends React.Component {
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
						VTC Features and Design Specifications
					</Header>
				</Container>

				<div className="ui divider"></div>

				<Grid celled>
					<Grid.Row>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
						<Grid.Column width={13}>
							<p>
								The Structures
							</p>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
						<Grid.Column width={10}>
							<p>
								The prototype is built with an extruded aluminum frame.
								<a href="/features/structures"> For more information click here. </a>
							</p>
						</Grid.Column>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<div className="ui divider"></div>

				<Grid celled>
					<Grid.Row>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
						<Grid.Column width={13}>
							<p>
								The Cooling Subsystem
							</p>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
						<Grid.Column width={10}>
							<p>
								The prototype is built with an extruded aluminum frame.
								<a href="/features/cooling"> For more information click here. </a>
							</p>
						</Grid.Column>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<div className="ui divider"></div>

				<Grid celled>
					<Grid.Row>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
						<Grid.Column width={13}>
							<p>
								The Controls Subsystem
							</p>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
						<Grid.Column width={10}>
							<p>
								The prototype is built with an extruded aluminum frame.
								<a href="/features/controls"> For more information click here. </a>
							</p>
						</Grid.Column>
						<Grid.Column width={3}>
							<img src={VTCfigure} alt="VTC internal design" />
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<Footer/>
			</div>

		);
	}
}

export default Features;
