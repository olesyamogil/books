import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CategoriesList extends Component {
  render() {
    const { categories } = this.props.data;
    return (
      <ol className="categories-list">
        {Object.keys(categories).map(categoryId => (
          <li key={categoryId}><Link to={`categories/${categoryId}`}>{categories[categoryId].name}</Link></li>
        ))}
      </ol>
    );
  }
}

export default CategoriesList;
