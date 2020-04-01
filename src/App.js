import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Particles from "react-particles-js";
import Logo from './components/Logo';
import ImgLinkForm from './components/ImgLinkForm';
import Rank from './components/Rank';

const param = {
  number: {
    value: 10,
    density: {
      enable: true,
      value_area: 1000
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      ImgURL : "",
    }
  }

  onChangeURL = (event) => {
  //  console.log(event.target.value);
    this.setState({ ImgURL: event.target.value });
  //  console.log(this.state.ImgURL);
  }

  onSubmit = () => {
    console.log("click");
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={param}/>
        <Navigation />
        <Logo/>
        <Rank/>
        <ImgLinkForm onChangeURL={this.onChangeURL} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
