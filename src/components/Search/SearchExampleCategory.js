import _ from 'lodash';
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' };

const source = {
  books: {
    name: "books",
    results: [
      {
        "id": 1,
        "title": "Unlocking Android",
      },
      {
        "id": 2,
        "title": "Android in Action, Second Edition",
      },
      {
        "id": 3,
        "title": "Flexible Rails",
      },
      {
        "id": 4,
        "title": "Hello! Flex 4",
      },
      {
        "id": 5,
        "title": "JSTL in Action",
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
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results };
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
