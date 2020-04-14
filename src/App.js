import React from 'react';
import { Container, Header, Grid, Rail, Segment } from 'semantic-ui-react';
import './App.css';
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopMenu />

      <Container style={linksStyle}>
        <Header  className="App-header">
          Emergency Cooler for Multiple Environments
        </Header>
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
            About Page:
            <Rail position='left'>
              <Segment>
                Contact Page:
              </Segment>
            </Rail>

            <Rail position='right'>
              <Segment>
                Display Page:
              </Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>

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

      <Footer />
    </div>
  );
}

export default App;

const linksStyle = {
  // HTML lightgray / lightgrey
  paddingTop: '10vh'
};
