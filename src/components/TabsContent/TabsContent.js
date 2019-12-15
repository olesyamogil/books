import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import "./TabsContent.scss"

class TabsContent extends Component {
  render() {
    return (
      <div className="tab-content">
        <Switch>
          {this.props.content.map(item => (
            <Route
              key={item.path}
              exact
              path={item.path}
              render={item.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default TabsContent;
