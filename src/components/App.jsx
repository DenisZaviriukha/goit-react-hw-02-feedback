import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <Layout>
        <div></div>
        <GlobalStyle />
      </Layout> 
    )
  };
};
