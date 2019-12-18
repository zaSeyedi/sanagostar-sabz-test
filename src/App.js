import React from 'react';
import { Route,BrowserRouter as Router } from 'react-router-dom'
import InformationPage from './components/InformationPage'
import ListPage from './components/ListPage'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={InformationPage} />
          <Route exact path="/karfarma-list" component={ListPage} />
        </div>
      </Router>
    );
  }
}
