import React, { Component } from 'react';
import './App.css';
import { fetchTweets } from './Lib/Api'
import _ from 'lodash';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    fetchTweets().then((response) => {
     this.setState({data: response})
    });
  }

  tweets() {
    _.map(this.state.data, (tweet) => {
      return <div>{tweet.user}: {tweet.text}</div>
    });
  }

  render() {
    // console.log(this.state.data)
    return (
      <div className="App">
        <div className="tweeter-header">
          <h1 className="tweeter-h1">Search for a hashtag</h1>
          <span>#</span><input type="text" />
        </div>
        <h1>Tweets</h1>
        {this.tweets()}
      </div>
    );
  }
}

export default App;
