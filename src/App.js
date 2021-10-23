import React from 'react';
import Profile from './component/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

 
  render() {

    return (
      <>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/Profile">
            <Profile/>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}

export default App;



