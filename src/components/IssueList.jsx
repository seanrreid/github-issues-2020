import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import { loadData } from "../utils/loadData";

import { Title } from "bloomer";

import Issue from "./Issue";

class IssueList extends Component {
  state = {
    issues: [],
  };

  async componentDidMount() {
    const issues = await loadData(
      `https://api.github.com/repos/facebook/create-react-app/issues`
    );

    this.setState({
      issues,
    });
  }

  render() {
    const { issues } = this.state;

    return (
      <>
        {!!issues.length ? (
          <>
            <Route exact path="/">
              <Title isSize={2} tag="h1">
                Github Issues List
              </Title>
              <ul>
                {issues.map((issue) => (
                  <li key={issue.id}>
                    {issue.title}
                    <br />
                    <Link to={`/issue/${issue.number}`}>
                      View Issue Details
                    </Link>
                  </li>
                ))}
              </ul>
            </Route>
            <Route path={`/issue/:issue_number`}>
              <Issue issues={issues} />
            </Route>
          </>
        ) : (
          <p>Fetching issues...</p>
        )}
      </>
    );
  }
}

export default IssueList;
