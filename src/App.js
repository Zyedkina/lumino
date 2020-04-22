import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Particles from "react-particles-js";
import Logo from './components/Logo';
import FaceRecognition from './components/FaceRecognition';
import ImgLinkForm from './components/ImgLinkForm';
import Rank from './components/Rank';
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
      box: {} 
    };
  }

  calFaceBox = (response) => {
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
      box: {}
    }));
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then( response => this.displayFaceBox(this.calFaceBox(response)))
      .catch(err => console.log("Error Baby :( ", err));
  }

  render() {
    let imgURL = this.state.imgURL;
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

    // app.models.predict(Clarifai.COLOR_MODEL,
    // // URL
    //   "https://samples.clarifai.com/metro-north.jpg")
    //   .then(function(response) {
    //     // do something with responseconsole.log(response);

    //     },
    //     function(err) {// there was an error

    //     }
    //   );

    // app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.input)
    // .then(
    //   response => {
    //     let res = response.outputs[0].data.regions;
    //     console.log("app ",res);

    //     const cal = res[0].region_info.bounding_box;
    //     const image = document.getElementById('image');
    //     const width = Number(image.width);
    //     const height = Number(image.height);
    //     let boxF = {
    //       leftCol: cal.left_col * width,
    //       topRow: cal.top_row * height,
    //       rightCol: width - (cal.right_col * width),
    //       bottomRow: height - (cal.bottom_row * height)
    //     };
    //     console.log(boxF);
    //     this.setState({ box: boxF });
    //     console.log("boxbox ",this.state.box);
    //   })
    //   .catch (err => console.log("Error Baby :( ", err));