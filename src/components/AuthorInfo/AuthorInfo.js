import React, {Component} from 'react';
import { Link } from "react-router-dom";

class AuthorInfo extends Component {
  render() {
    const authorId = +this.props.match.match.params.id;
    const {authors, books} = this.props.data;
    let authorsBooks = [];
    for (let idKey in books) {
      if (books[idKey].authorsIds.includes(authorId)) {
        authorsBooks.push(+idKey);
      }
    }
    return (
      <div className="author-info">
        <p className="author-info__name">
          {authors[authorId].name}
        </p>
        <p className="author-info__biography">
          Biography: <br/>
          {authors[authorId].biography}
        </p>
        <ul className="author-info__books">
          {
            authorsBooks.map(bookId => (
              <li key={bookId}>
                <Link to={`/books/${bookId}`}>{books[bookId].title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;
