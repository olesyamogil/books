import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BooksList extends Component {
  render() {
    const { books, authors } = this.props.data;
    const categoryIdFilter = +this.props.match.match.params.id;
    let filteredBooks = {};
    if (categoryIdFilter) {
      for (let idKey in books) {
        if (books[idKey].categoryId === categoryIdFilter) {
         filteredBooks[idKey] = books[idKey];
        }
      }
    } else {
      filteredBooks = books;
    }
    return (
      <ol className="books-list">
        {Object.keys(filteredBooks).map(bookId => (
          <li key={bookId}>
            <div className="bookCard">
              <Link to={`/books/${bookId}`}>{filteredBooks[bookId].title}</Link>
              <ul>Authors:
                {
                  filteredBooks[bookId].authorsIds.map(authorId => (
                    <li key={authorId}><Link to={`/authors/${authorId}`}>{authors[authorId].name}</Link></li>
                  ))
                }
              </ul>


            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default BooksList;
