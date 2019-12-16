import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Accordion, Icon} from "semantic-ui-react";

class AuthorsList extends Component {
  state = {
    activeIndex: 0,
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex })
  };

    render() {
    const { authors, books } = this.props.data;
    const { activeIndex } = this.state;

    return (
      <Accordion>
        {Object.keys(authors).map(authorId => (
          <>
            <Accordion.Title
              active={activeIndex === Number(authorId)}
              index={Number(authorId)}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              {authors[authorId].name}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === Number(authorId)}>
              <Link to={`authors/${authorId}`}>Go to author`s page</Link>
              {Object.values(books).filter(book => book.authorsIds.includes(Number(authorId)))
                .map(book => (
                <Link to={`/books/${book.id}`}>{books[book.id].title}</Link>
                )
              )}
            </Accordion.Content>
          </>
        ))}
      </Accordion>
    );
  }
}

export default AuthorsList;
