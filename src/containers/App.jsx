import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from '../hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
