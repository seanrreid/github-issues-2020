import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({ issue }) => (
  <>
    <h2>{issue.title}</h2>
    <Link to={`/issue/${issue.number}`}>View Issue Details</Link>
  </>
);

export default Issue;
