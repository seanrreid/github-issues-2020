import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'bloomer';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';

import 'bulma/css/bulma.css';
import './global.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Route path="/" exact component={IssueList} />
          <Route path="/issue/:issue_number?" component={IssueDetail} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
