import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Container } from "bloomer";
import IssueList from "./components/IssueList";

import "bulma/css/bulma.css";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <IssueList />
        </Container>
      </Router>
    </div>
  );
}

export default App;
