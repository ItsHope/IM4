import React, {Component} from "react";
import "../styles/App.css";
import {Howl, Howler} from "howler";
import BM from "../Pages/BM.mp3";

const audioClip = [
    {sound: BM, label: "BM"}

]

class AudioPlayer extends Component {
    SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }


    
    RenderButtonAndSound = () => {
        return audioClip.map((soundObj, index) => {
            return(
                <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
                  {soundObj.label}

                </button>
            )
        })
    }
    render() {
        Howler.volume(1.0)
        return<div className="AudioPlayer"></div>
        {this.RenderButtonAndSound()}
    }

    
}
export default AudioPlayer;

