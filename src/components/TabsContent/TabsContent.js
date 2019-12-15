import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

class TabsContent extends Component {
  render() {
    return (
      <Switch>
        {this.props.content.map(item => (
          <Route
            exact
            path={item.path}
            render={item.component}
          />
        ))}
      </Switch>

    );
  }
}

export default TabsContent;
