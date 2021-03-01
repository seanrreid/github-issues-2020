import React from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

import { Title } from "bloomer";

const Issue = (props) => {
  const { issues } = props;
  const { issue_number } = useParams();
  const issue = issues.find((issue) => {
    return issue.number === parseInt(issue_number) ? issue : null;
  });

  return (
    <>
      <nav style={{ margin: "1rem auto" }}>
        <Link to="/">Back to List</Link>
      </nav>
      {!!issue ? (
        <>
          <Title isSize={2} tag="h1">
            {issue.title}
          </Title>
          <ReactMarkdown source={issue.body} escapeHtml={false} />
        </>
      ) : (
        <p>Loading issues...</p>
      )}
    </>
  );
};

export default Issue;
