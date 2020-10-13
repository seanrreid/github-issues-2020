import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

// Helpers
import { loadData } from "../utils/loadData";

// Components
import Issue from "./Issue";

// Styles
import { Title } from "bloomer";

const IssueList = (props) => {
  // Set our initial state
  const [issues, setIssues] = useState([]);

  // useEffect Hook works almost like a lifecycle method
  // We can use this hook, and an IIFE, to go and fetch our data and load the state
  useEffect(() => {
    (async function () {
      const issues = await loadData(
        `https://api.github.com/repos/facebook/create-react-app/issues`
      );
      setIssues(issues);
    })();
  }, [setIssues]);

  return (
    <>
      <Title isSize={2} tag="h1">
        Github Issues List
      </Title>
      {!!issues.length ? (
        <>
          <Route exact path="/">
            <ul>
              {issues.map((issue) => (
                <li key={issue.id}>
                  {issue.title}
                  <br />
                  <Link to={`/issue/${issue.number}`}>View Issue Details</Link>
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
};

export default IssueList;
