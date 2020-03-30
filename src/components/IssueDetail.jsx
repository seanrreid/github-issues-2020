import React, { Component } from 'react';
import { loadData } from '../utils/loadData';

class IssueDetail extends Component {
  state = {
    issueDetails: []
  };

  async componentDidMount() {
    const { issue_number } = this.props.match.params;
    const issueDetails = await loadData(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    );

    this.setState({
      issueDetails
    });
  }

  render() {
    const { issueDetails } = this.state;
    return (
      <div>
        <h1>{issueDetails.title}</h1>
        <p>{issueDetails.body}</p>
      </div>
    );
  }
}

export default IssueDetail;
