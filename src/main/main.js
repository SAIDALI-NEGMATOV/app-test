import React, { Component } from 'react';
import './style.css'

class Main extends Component {
    render() {
        return (
          <div className='Container d-flex justify-content-between'>
            <div className="row d-flex flex-row justify-content-betwee mb-3 border border-primary">
              <a href="#">How it works</a>
              <a href="#">Play and earn</a>
              <a href="#">Roadmap</a>
              <a href="#">Team</a>
              <a href="#">Partners&Investors</a>
              <a href="#">Why invest in SpiderShiba</a>
              <a href="#">Tokenomics</a>
              <a href="#">FAQ</a>
              <a href="#">Community</a>
              <button className=''>Join Community</button>
            </div>
          </div>
        );
    }
}

export default Main;
