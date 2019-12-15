import React, {Component} from 'react';
import {  BrowserRouter } from 'react-router-dom';

import "./BookCatalog.scss";
import BooksList from "../BooksList/BooksList";
import AuthorsList from "../AuthorsList/AuthorsList";
import CategoriesList from "../CategoriesList/CategoriesList";
import Tabs from "../Tabs/Tabs";
import TabsContent from "../TabsContent/TabsContent";
import BookInfo from "../BookInfo/BookInfo";
import AuthorInfo from "../AuthorInfo/AuthorInfo";

class BookCatalog extends Component {
  state = {
    data: {
      books: [
        {
          "id": 1,
          "title": "Unlocking Android",
          "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          "authorId": 1,
          "categoryId": 1
        },
        {
          "id": 2,
          "title": "Android in Action, Second Edition",
          "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
          "authorId": 1,
          "categoryId": 1
        },
        {
          "id": 3,
          "title": "Flexible Rails",
          "shortDescription": "Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.",
          "authorId": 2,
          "categoryId": 3
        },
        {
          "id": 4,
          "title": "Hello! Flex 4",
          "shortDescription": "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
          "authorId": 2,
          "categoryId": 2
        },
        {
          "id": 5,
          "title": "JSTL in Action",
          "shortDescription": "JSTL is an important simplification of the Java web platform. With JSTL, page authors can now write dynamic pages using standard HTML-like tags and an easy-to-learn expression language.",
          "authorId": 3,
          "categoryId": 2
        }
      ],
      authors: [
        {
          "id": 1,
          "name": "W. Frank Ableson",
          "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis.",
        },
        {
          "id": 2,
          "name": "Peter Armstrong",
          "biography": "Etiam non quam lacus suspendisse faucibus. Sagittis eu volutpat odio facilisis mauris sit. Nisl condimentum id venenatis a condimentum.",
        },
        {
          "id": 3,
          "name": "Shawn Bayern",
          "biography": "Maecenas sed enim ut sem viverra aliquet eget sit amet. Massa id neque aliquam vestibulum morbi blandit cursus. Feugiat vivamus at augue eget arcu dictum varius duis at.",
        }
      ],
      categories: [
        {
          "id": 1,
          "name": "Software Engineering"
        },
        {
          "id": 2,
          "name": "Internet"
        },
        {
          "id": 3,
          "name": "Web Development"
        }
      ],
    },
    routes: [
      {
        path: '/books',
        component: () => <BooksList books={this.state.data.books}/>
      },
      {
        path: '/books/:id',
        component: (match) => <BookInfo match={match}/>,
      },
      {
        path: '/authors',
        component: () => <AuthorsList authors={this.state.data.authors}/>
      },
      {
        path: '/authors/:id',
        component: (match) => <AuthorInfo match={match}/>
      },
      {
        path: '/categories',
        component: () => <CategoriesList categories={this.state.data.categories}/>
      },

    ],
  };



  render() {
    return (
     <BrowserRouter>
       <header className="header">
         <h1 className="header__title">Book Catalog</h1>
         <Tabs tabs={Object.keys(this.state.data)}/>
       </header>
       <TabsContent content={this.state.routes} />
     </BrowserRouter>
    );
  }
}

export default BookCatalog;
