import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './App.css';
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Container text style={{marginTop: '1em', marginBottom: '1em'}}>
        <Header as='h1' className="App-header">
          <p>
            Emergency Cooler
          </p>
        </Header>
      </Container>
      <text className="App-body">
        <p>
          Hello, this is a website. It uses the React architecture.
          We can do lots of things with this website. Let me know what you think.
          miske@mit.edu
        </p>
      </text>
    </div>
  );
}

export default App;
