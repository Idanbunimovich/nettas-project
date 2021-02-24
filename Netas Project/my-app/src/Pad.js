
import {useEffect, useState,useRef} from 'react'


const Pad = (props) => {

    let {sound,songPlay,songPause,playArray,index} = props;



    const [songState , setSongState] = useState('play');
    const [songPause2,setSongPause] = useState(false);

    //variable to check if component mounted to the DOM
    const isMount = useRef(false);



    useEffect(()=>{

        if(isMount.current === true) {
            if (songPause === true && playArray[index] === true) {

                sound.pause();


            } else {
                if(playArray[index] === true) {
                    sound.play();
                }
            }
        }
        else{
            isMount.current = true;
        }
    },[songPause])

    const changePadState = (state) => {


            if (state === 'play') {
                let obj = {};
                obj.index = index;
                obj.sound = sound;


                if(songPlay.length === 0) {

                    songPlay.push(obj);
                    sound.play();
                    playArray[index] = true;


                }
                else{

                    songPlay.push(obj);

                }
                setSongState('stop')
            } else {

                sound.stop();
                setSongPause(false);
                playArray[index] = false;

                //looking for the item in the queue to remove him
                for(let i=0; i < songPlay.length; i++){
                    if(songPlay[i].index === index){
                        if(i < songPlay.length - 1){
                            songPlay[i+1].sound.play();
                            songPlay = songPlay.splice(i,1);

                        }


                        break;
                    }
                }

                setSongState('play');
            }

    }






    return(

        <button style={{margin:'3rem',padding:'1rem'}} onClick={() => changePadState(songState)}>
            shalom


        </button>
    )

    }

    export default Pad;