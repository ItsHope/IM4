import React, {Component} from "react";
import "../styles/App.css";
import {Howl, Howler} from "howler";
import BM from "../audio/BM.mp3";
import Gallery from "..//Gallery/Gallery"

const audioClip = [
    {sound: BM, label: "Play Sound"}

]

class InternetArtwork extends Component {
    SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }


    
    RenderButtonAndSound = () => {
        return audioClip.map((soundObj, index) => {
            return(
                <div class="container"> 
                <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
                  {soundObj.label}

                </button>
                </div>
            )
        })
    }
    render() {
        Howler.volume(1.0)
        return<div className="InternetArtwork">
        {this.RenderButtonAndSound()}
        <div>
            <h1>
                Low Exposure Aesthetic
            </h1>
        </div>
        <Gallery/>

        
        </div>;


    }

    
    

    
}
export default InternetArtwork;

