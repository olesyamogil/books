import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AuthorsList extends Component {
  render() {
    const { authors } = this.props.data;

    return (
      <ol className="authors-list">
        {Object.keys(authors).map(authorId => (
          <li key={authorId}><Link to={`authors/${authorId}`}>{authors[authorId].name}</Link></li>
        ))}
      </ol>
    );
  }
}

export default AuthorsList;
