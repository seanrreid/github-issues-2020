import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { loadData } from "../utils/loadData";
import { Title } from "bloomer";

import { useParams } from "react-router-dom";

class IssueDetail extends Component {
  state = {
    issueDetails: [],
  };

  async componentDidMount() {
    const { issue_number } = this.props.match.params;
    const issueDetails = await loadData(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    );

    this.setState({
      issueDetails,
    });
  }

  render() {
    const { id } = useParams();
    const { issueDetails } = this.state;
    return (
      <div>
        <Title isSize={2} tag="h1">
          {issueDetails.title}
        </Title>
        <ReactMarkdown source={issueDetails.body} escapeHtml={false} />
      </div>
    );
  }
}

export default IssueDetail;
