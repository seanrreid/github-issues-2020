import React, { Component } from "react";
import { loadData } from "../utils/loadData";
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
      <ul>
        {!!issues.length ? (
          issues.map((issue) => <Issue key={issue.id} issue={issue} />)
        ) : (
          <li>No Issues</li>
        )}
      </ul>
    );
  }
}

export default IssueList;
