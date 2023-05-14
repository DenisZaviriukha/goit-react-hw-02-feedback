import React, { Component } from "react";

import { FeedbackOptions } from "./Control/Control";
import { Statistics } from "./Stats/Stats";

import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";
import {Section} from "./Section/Section";

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  addFeedback = feedback => {
    this.setState(prevState => {
      if (feedback === "good") {
        return { good: prevState.good + 1 };
      } else if (feedback === "neutral") {
        return { neutral: prevState.neutral + 1 };
      } else {
        return { bad: prevState.bad + 1 };
      }
    });
  }

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    if (total === 0) { 
      return "0%"
    }
    return `${((good / total)*100).toFixed(2)}%`
  };

  render() {
    // console.log(Object.keys(this.state))
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onFeedback={this.addFeedback} />
        </Section>
        
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
        <GlobalStyle />
      </Layout>
    )
  };
};
