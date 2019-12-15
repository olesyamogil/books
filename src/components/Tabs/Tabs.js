import React, {Component} from 'react';
import "./Tabs.scss"
import {NavLink} from "react-router-dom";

class Tabs extends Component {
  render() {
    return (
      <ul className="tabs">
        {
          this.props.tabs.map(tab => (
            <li><NavLink className="tab" activeClassName="tab-active" to={`/${tab}`}>{tab}</NavLink></li>
          ))
        }
      </ul>
    );
  }
}

export default Tabs;
