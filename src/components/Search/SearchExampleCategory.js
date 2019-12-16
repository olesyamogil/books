import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' };

// const getResults = () =>
//     _.times(5, () => ({
//       title: faker.company.companyName(),
//       description: faker.company.catchPhrase(),
//       image: faker.internet.avatar(),
//       price: faker.finance.amount(0, 100, 2, '$'),
//     }))
//
// const source = _.range(0, 3).reduce((memo) => {
//   const name = faker.hacker.noun();
//
//   memo[name] = {
//     name,
//     results: getResults(),
//   };
//
//   return memo
// }, {});
//
const source = {
  books: {
    name: "books",
    results: [
      {
        "id": 1,
        "title": "Unlocking Android",
        "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        "authorsIds": [ 1 ],
        "categoryId": 1
      },
      {
        "id": 2,
        "title": "Android in Action, Second Edition",
        "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        "authorsIds": [1, 2],
        "categoryId": 1
      },
      {
        "id": 3,
        "title": "Flexible Rails",
        "shortDescription": "Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.",
        "authorsIds": [ 2 ],
        "categoryId": 3
      },
      {
        "id": 4,
        "title": "Hello! Flex 4",
        "shortDescription": "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
        "authorsIds": [2],
        "categoryId": 2
      },
      {
        "id": 5,
        "title": "JSTL in Action",
        "shortDescription": "JSTL is an important simplification of the Java web platform. With JSTL, page authors can now write dynamic pages using standard HTML-like tags and an easy-to-learn expression language.",
        "authorsIds": [3],
        "categoryId": 2
      }
    ],
  },
  authors: {
    name: "authors",
    results: [
      {
        "id": 1,
        "title": "W. Frank Ableson",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis."
      },
      {
        "id": 2,
        "title": "Peter Armstrong",
        "biography": "Etiam non quam lacus suspendisse faucibus. Sagittis eu volutpat odio facilisis mauris sit. Nisl condimentum id venenatis a condimentum."
      },
      {
        "id": 3,
        "title": "Shawn Bayern",
        "biography": "Maecenas sed enim ut sem viverra aliquet eget sit amet. Massa id neque aliquam vestibulum morbi blandit cursus. Feugiat vivamus at augue eget arcu dictum varius duis at."
      }
    ],
  },
  categories: {
    name: "categories",
    results: [
      {
        "id": 1,
        "title": "Software Engineering"
      },
      {
        "id": 2,
        "title": "Internet"
      },
      {
        "id": 3,
        "title": "Web Development"
      }
    ]
  }
};

export default class SearchExampleCategory extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      const filteredResults = _.reduce(
        source,
        (memo, data, name) => {
          ///
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo
        },
        {},
      );

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 300)
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        category
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        {...this.props}
      />
    )
  }
}
