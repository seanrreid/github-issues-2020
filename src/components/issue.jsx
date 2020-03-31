import React from "react";
import ReactMarkdown from 'react-markdown/with-html';

const Issue = ({ issue }) => (
  <>
    <h2>{issue.title}</h2>
    <p>
      <a href={issue.url}>{issue.url}</a>
    </p>
    <ReactMarkdown source={issue.body} escapeHtml={false} />
  </>
);

export default Issue;
