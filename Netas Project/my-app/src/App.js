import logo from './logo.svg';
import './App.css';
import {Howl,Howler} from 'howler'
import firstSong from './MusicFiles/120_future_funk_beats_25.mp3'
import secondsong from './MusicFiles/PAS3GROOVE1.03B.mp3'
import thirdSong from './MusicFiles/120_stutter_breakbeats_16.mp3'
import fourthSong from './MusicFiles/Bass Warwick heavy funk groove on E 120 BPM.mp3'
import fifthSong from './MusicFiles/electric guitar coutry slide 120bpm - B.mp3'
import sixthSong from './MusicFiles/FUD_120_StompySlosh.mp3'
import seventhSong from './MusicFiles/GrooveB_120bpm_Tanggu.mp3'
import eigthSong from './MusicFiles/MazePolitics_120_Perc.mp3'
import ninthSong from './MusicFiles/SilentStar_120_Em_OrganSynth.mp3'
import Pad from "./Pad";
import {useState} from "react";

let songPlay = [];
let songArray = [firstSong,secondsong,thirdSong,fourthSong,fifthSong,sixthSong,seventhSong,eigthSong,ninthSong]
let playArray = songArray.map(item=>{
    return false
})
let soundArray = songArray.map((item,index) => {

    let sound = new Howl({
        src: [item],
        loop:true,
        onend: () => {
            if(songPlay.length === 1){

            }
            else{
                songPlay.shift();
                songPlay[0].sound.play();
                playArray[songPlay[0].index] = true;


            }
        }

    });


    return sound;

})
console.log(soundArray)

function App() {
    const [songPause,setSongPause] = useState(false);
    return (
    <div className="App">
      <h1>Neta's awesome music</h1>
        {songArray.map((item,index)=>{


            return(<Pad index={index} playArray={playArray} songPlay={songPlay} sound={soundArray[index]} songPause ={songPause}/>)
        })}

        <button style={{display:'block' ,padding:'1rem',marginLeft:'auto',marginRight:'auto',marginTop:'3rem'}}
                onClick={() => setSongPause(true)}>
            pause
        </button>
        <button style={{display:'block' ,padding:'1rem',marginLeft:'auto',marginRight:'auto',marginTop:'3rem'}}
                onClick={() => setSongPause(false)}>
            play
        </button>

    </div>
  );
}

export default App;
