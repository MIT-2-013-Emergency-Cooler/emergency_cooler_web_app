import React from 'react';
import { Container, Header, Grid, Rail, Segment } from 'semantic-ui-react';
import './App.css';
import VTCfigure from './assets/figNewDesign.png';
import VTClogo from './assets/VTClogo-512x512.png';
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <div className="ui divider"></div>
      <Container>
        <img class="ui centered medium image" src={VTClogo} alt="Logo of VTC"></img>
      </Container>
      <Container>
        <img class="ui centered medium bordered image" src={VTCfigure} alt="Design screenshot of VTC"></img>
      </Container>

      <Container style={linksStyle}>
        <Header  className="App-header">
          Emergency Cooler for Multiple Environments
        </Header>
      </Container>
      <Container>
        <Grid centered columns={3}>
          <Grid.Column>
            <Segment>
              <Rail position='left'>
                <Segment>
                  The Variable Temperature Cryocooler group is working on a cryogenic freezer system that is capable of
                  maintaining a storage volume of biomedical samples or other valuable research subjects between -20C and
                  -150C using a specialized, free-piston Stirling cycle engine.
                </Segment>
              </Rail>
              This Spring, we are working towards the development of a novel systems engineering innovation in temperature
              modulation and learning a lot about engineering systems at cryogenic temperatures.
              <Rail position='right'>
                <Segment>
                  This website uses the React architecture and AWS Amplify backend.
                </Segment>
              </Rail>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>

      <div className="ui divider"></div>

      <Grid>
        <Grid.Row>
          <Container style={linksStyle}>
            <Header className="App-header">
              Pages on this website
            </Header>
          </Container>
        </Grid.Row>
      </Grid>
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment>
            <Rail position='left'>
              <Segment>
                Contact Page:  <a href="/contact">here </a>
              </Segment>
            </Rail>
            About Page:  <a href="/about">here </a>
            <Rail position='right'>
              <Segment>
                Display Page: <a href="/display">here </a>
              </Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>

      <div className="ui divider"></div>

      <Grid>
        <Grid.Row>
          <Container style={linksStyle}>
            <Header className="App-header">
              Links to Resources
            </Header>
          </Container>
        </Grid.Row>
      </Grid>

      <Grid centered columns={3}>
        <Grid.Column>
          <Segment>
            Google Drive:
            <a href="https://drive.google.com/drive/u/0/folders/1pJU-UnZBZ1SewCKuUvTUV53JyhFK-jNR"> Link </a>
            <Rail position='left'>
              <Segment>
                VTC Overleaf White Paper
                <a href="https://www.overleaf.com/project/5e8aa0f7651789000155d7d1">Link</a>
              </Segment>
            </Rail>

            <Rail position='right'>
              <Segment>
                Youtube Video of operating engine
                <a href="https://www.youtube.com/watch?v=9zn6LSyV5ms">Link </a>
              </Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
      <div className="ui divider"></div>

      <Footer />
    </div>
  );
}

export default App;

const linksStyle = {
  // HTML lightgray / lightgrey
  paddingTop: '10vh'
};
