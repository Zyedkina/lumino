import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Particles from "react-particles-js";
import Logo from './components/Logo';
import FaceRecognition from './components/FaceRecognition';
import ImgLinkForm from './components/ImgLinkForm';
//import Rank from './components/Rank';
//const Clarifai = require('clarifai');
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '09f7fc57537a44df828b43038f1c4e57',
});

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
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imgURL : '',
      box: {},
      Gender: ''
    };
  }

  calFaceBox = (response) => {
    console.log(response);
    let val = response.outputs[0].data.regions[0].data.concepts[20].name;
    console.log(val);
    if (val === "masculine") {
      val = "Gender: Male";
    } else if (val === "feminine") {
      val = "Gender: Female";
    }
    let p = document.getElementById("genderP");
    p.innerHTML = val;
    this.setState({Gender: val});
    const cal = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number (image.height);
    return {
      leftCol : cal.left_col * width,
      topRow : cal.top_row * height,
      rightCol : width - (cal.right_col * width),
      bottomRow : height - (cal.bottom_row * height)
    }
  }

  displayFaceBox = (boxF) => {
  //  console.log("displayBox ",box);
    this.setState({box: boxF});
  }

  onChangeURL = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    this.setState((state) => ({
      imgURL: state.input,
      box: {},
      Gender: ''
    }));
    let p = document.getElementById("genderP");
    p.innerHTML = "Waiting...";
    app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
      .then( response => this.displayFaceBox(this.calFaceBox(response)))
      .catch(err => {
        console.log("Error Baby :( ", err);
        let p = document.getElementById("genderP");
        p.innerHTML = "Sorry, Can't Detect Gender";
      });
  }

  render() {
    let imgURL = this.state.imgURL;
    let gender = this.state.Gender;
    return (
      <div className="App">
        <Particles className='particles' params={param}/>
        {//  <Navigation /> 
        }
        <Logo/>
        {//  <Rank/>
        }
        <ImgLinkForm onChangeURL={this.onChangeURL} onSubmit={this.onSubmit}/>
        <FaceRecognition box={this.state.box} url= {imgURL}/>
      </div>
    );
  }
}

export default App;