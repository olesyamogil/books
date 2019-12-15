import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BookInfo extends Component {
  render() {
    const {id} = this.props.match.match.params;
    const {books, authors, categories} = this.props.data;
    const categoryId = books[id].categoryId;
    return (
      <div className="book-info" key={id}>
        <p className="book-info__title">{books[id].title}</p>
        <ul className="book-info__authors">Authors:
          {
            books[id].authorsIds.map(authorId => (
              <li><Link to={`/authors/${authorId}`}>{authors[authorId].name}</Link></li>
            ))
          }
        </ul>
        <p className="book-info__category">
          Category: <br/>
          <Link to={`/categories/${categoryId}`}>{categories[categoryId].name}</Link>
        </p>
        <p className="book-info__about">
          Short description: <br/>
          {books[id].shortDescription}
        </p>

      </div>
    );
  }
}

export default BookInfo;
