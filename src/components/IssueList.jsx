import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { loadData } from "../utils/loadData";
import Issue from "./Issue";

import { Title } from "bloomer";

const IssueList = (props) => {
  const [issues, setIssues] = useState([]);

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
      {!!issues.length ? (
        <>
          <Title isSize={2} tag="h1">
            Github Issues List
          </Title>
          <Route exact path="/">
            <ul>
              {issues.map((issue) => {
                return (
                  <li key={issue.id}>
                    {issue.title}
                    <Link to={`/issue/${issue.number}`}>View Details</Link>
                  </li>
                );
              })}
            </ul>
          </Route>
          <Route path={`/issue/:issue_number`}>
            <Link to="/" style={{ display: "block", margin: "1rem auto"}}>Return to List</Link>
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
