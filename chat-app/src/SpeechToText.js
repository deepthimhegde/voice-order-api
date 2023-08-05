import React, { Component } from 'react'
import mic_on from './mic_on.png'
import mic_off from './mic_off.png';
import './SpeechToText.css'
class SpeechToText extends Component {
    state = {
        off: this.props.mic_status
    }
    toggleStatus = () => {
        this.setState(state => ({ off: !state.off }))
        this.props.onMicStatusChange(this.state.off)
    }
    getImageName = () => this.state.off ? mic_off : mic_on
    render() {
      return (
        <div className="SpeechToText">

            <button onClick={this.toggleStatus}>
                <img src={this.getImageName()} className="Mic-logo" alt="Mic" />
            </button> 
        </div>
      )
    }
  }

  export default SpeechToText