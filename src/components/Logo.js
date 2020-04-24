import React, { Component } from "react";
import "./Logo.css";
import Tilt from "react-tilt";
import lumino from './lumino03.png';

class Logo extends Component {
  render() {
    return (
      <div className="ma4 mt5 center">
        <Tilt
          className="Tilt br2 shadow-2 center"
          options={{ max: 45 }}
          style={{display: 'flex', alignItems: 'center', height: 150, width: 150 }}
        >
          <div className="Tilt-inner pa1">
              <img src={lumino} alt='logo'/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
