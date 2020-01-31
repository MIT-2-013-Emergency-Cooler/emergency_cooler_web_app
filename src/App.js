import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './App.css';
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={styles}>
      <TopMenu />
      <Container>
        <Header as='h1' className="App-header">
          <p>
            Emergency Cooler
          </p>
        </Header>
      </Container>
      <Container>
        <text className="App-body">
          <p>
            Hello, this is a website. It uses the React architecture.
            We can do lots of things with this website. Let me know what you think.
            miske@mit.edu
          </p>
        </text>
      </Container>
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
