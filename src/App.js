import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/navigation';
import Content from './components/content';
import { Button } from '@wfp/ui';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    }
  }

  toggleNav = () => {
    console.log('nav');
    this.setState({ navOpen: !this.state.navOpen, });
  }

  componentWillMount() {
    fetch("http://localhost:8888/exhibition-cms/wp-json/wp/v2/auschwitz_album")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { isLoaded, navOpen } = this.state;
    if (!isLoaded) return null;
    return (
      <div className="App">
        <Content {...this.state} />
        <Navigation {...this.state} />
      </div>
    );
  }
}

export default App;
