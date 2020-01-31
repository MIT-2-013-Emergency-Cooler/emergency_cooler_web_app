import React from 'react';
import { Container, Header, Grid, Rail, Segment } from 'semantic-ui-react';
import './App.css';
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import VTCfigure from './assets/VTCfigure.png';

function App() {
  return (
    <div style={styles}>
      <TopMenu />

      <Container>
        <Header as='h1' className="App-header">
          Emergency Cooler
        </Header>
        <img src={VTCfigure} style={figureStyle} alt="vtc"/>
      </Container>

      <Container>
        <text className="App-body">
          <p>
            Hello, this is a website. It uses the React architecture and AWS Amplify backend.
            We can do lots of things with this website. Let me know what you think.
            miske@mit.edu
          </p>
        </text>
      </Container>

      <Grid centered columns={3}>
        <Grid.Column>
          <Segment>
            This Spring, we are looking towards the development of many novel system innovations in temperature
            modulation and learning a lot about engineering systems at cryogenic temperatures.

            <Rail position='left'>
              <Segment>
                The Variable Temperature Cryocooler group is working on a cryogenic freezer system that is capable of
                maintaining a storage volume of biomedical samples or other valuable research subjects between -20C and
                -150C using a specialized, free-piston Stirling cycle engine.
              </Segment>
            </Rail>

            <Rail position='right'>
              <Segment>
                Hello, this is a website. It uses the React architecture and AWS Amplify backend.
                We can do lots of things with this website. Let me know what you think.
                miske@mit.edu
              </Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>

      <Footer />
    </div>
  );
}

export default App;

const styles = {
  marginLeft: '0em',
  marginRight: '0em',
  marginTop: '0em',
  backgroundColor: 'ACDCCC'
};

const figureStyle = {
  width: '50vh',
  height: '50vh',
  centered: true
};