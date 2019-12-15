import React, {Component} from 'react';

class BooksList extends Component {
  render() {
    return (
      <>
        {Object.keys(this.props.books).map(book => (
          <p>{this.props.books[book].title}</p>
        ))}
      </>
    );
  }
}

export default BooksList;
