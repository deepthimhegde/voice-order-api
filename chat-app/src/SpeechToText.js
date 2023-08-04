import React, { Component } from 'react'
import mic_on from './mic_on.png'
import mic_off from './mic_off.png';
import './SpeechToText.css'
class SpeechToText extends Component {
    state = {
        closed: true
    }
    toggleImage = () => {
        this.setState(state => ({ closed: !state.closed }))
    }
    getImageName = () => this.state.closed ? mic_off : mic_on
    render() {
      return (
        <div className="SpeechToText">

            <button onClick={this.toggleImage}>
                <img src={this.getImageName()} className="Mic-logo" alt="Mic" />
            </button> 
        </div>
      )
    }
  }

  export default SpeechToText