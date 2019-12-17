import React, {Component} from 'react';
import {  HashRouter } from 'react-router-dom';

import "./BookCatalog.scss";
import BooksList from "../BooksList/BooksList";
import AuthorsList from "../AuthorsList/AuthorsList";
import CategoriesList from "../CategoriesList/CategoriesList";
import Tabs from "../Tabs/Tabs";
import TabsContent from "../TabsContent/TabsContent";
import BookInfo from "../BookInfo/BookInfo";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import SearchExampleCategory from "../Search/SearchExampleCategory";

class BookCatalog extends Component {
  state = {
    isLoading: false,
    error: false,
    data: null,
    routes: [
      {
        path: '/books',
        component: (match) => <BooksList data={this.state.data} match={match}/>
      },
      {
        path: '/books/:id',
        component: (match) => <BookInfo match={match} data={this.state.data}/>,
      },
      {
        path: '/authors',
        component: () => <AuthorsList data={this.state.data}/>
      },
      {
        path: '/authors/:id',
        component: (match) => <AuthorInfo match={match} data={this.state.data}/>
      },
      {
        path: '/categories',
        component: () => <CategoriesList data={this.state.data}/>
      },
      {
        path: '/categories/:id',
        component: (match) => <BooksList match={match} data={this.state.data}/>
      },

    ],
  };

  normalizeData = (dataArray) => {
    const dataObject = {};
    dataArray.forEach((data) => {
      dataObject[data.id] = {...data};
    });
    return dataObject;
  };

  getDatafromServer = async url => fetch(url)
    .then(response => response.json());

  loadData = async () => {
    this.setState({
      isLoading: true,
      error: false,
    });
    try {
      const [books, authors, categories] = await Promise.all([
        this.getDatafromServer('https://raw.githubusercontent.com/olesyamogil/books/master/database/books.json'),
        this.getDatafromServer('https://raw.githubusercontent.com/olesyamogil/books/master/database/authors.json'),
        this.getDatafromServer('https://raw.githubusercontent.com/olesyamogil/books/master/database/categories.json'),
      ]);

      this.setState({
        data: {
          books: this.normalizeData(books),
          authors: this.normalizeData(authors),
          categories: this.normalizeData(categories),
        },
      });

    } catch (e) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (this.state.data === null) {
      return (
        <div className="errorMessage">
          {this.state.error
            ? <p className="errorMessage__text">Opps...Could not fetch data from server. Try again.</p>
            : <p className="errorMessage__text">Loading...</p>}
          <button type="button" onClick={this.loadData} className="errorMessage__button">
            Load data
          </button>
        </div>
      );
    }
    return (
     <HashRouter>
       <header className="page-header">
         <h1 className="page-header__title">Book Catalog</h1>
         <SearchExampleCategory />
         <Tabs tabs={Object.keys(this.state.data)}/>
       </header>
       <TabsContent content={this.state.routes} />
     </HashRouter>
    );
  }
}

export default BookCatalog;
