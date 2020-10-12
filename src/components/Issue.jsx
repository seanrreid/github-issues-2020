import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
//import { loadData } from "../utils/loadData";
import { Title } from "bloomer";

//import { useParams } from "react-router-dom";

const Issue = (props) => {
  const { issue } = props;
  return (
    <div>
      <Title isSize={2} tag="h1">
        {issue.title}
      </Title>
      <ReactMarkdown source={issue.body} escapeHtml={false} />
    </div>
  );
};

export default Issue;
