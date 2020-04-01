import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="fontU ">
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p id='signIn' className='f3 link dim grey pa3 pointer'>Sign Out</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;