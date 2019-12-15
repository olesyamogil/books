import React, {Component} from 'react';

class AuthorInfo extends Component {
  render() {
    return (
      <div>
        {this.props.match.match.params.id}
      </div>
    );
  }
}

export default AuthorInfo;
