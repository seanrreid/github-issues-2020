import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadData } from '../utils/loadData';

class IssueList extends Component {
  state = {
    issues: []
  };

  async componentDidMount() {
    const issues = await loadData(
      `https://api.github.com/repos/facebook/create-react-app/issues`
    );

    this.setState({
      issues
    });
  }

  render() {
    const { issues } = this.state;

    return (
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            {issue.title}
            <br />
            <Link to={`/issue/${issue.number}`}>View Issue Details</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default IssueList;
