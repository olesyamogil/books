import React, {Component} from 'react';

class BookInfo extends Component {
  render() {
    return (
      <div>
        {this.props.match.match.params.id}
      </div>
    );
  }
}

export default BookInfo;
