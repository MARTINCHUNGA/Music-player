

import React,{useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay,faPause, faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {playAudio} from '../util'

const Player = ({audioRef,currentSong,isPlaying,setIsPlaying,songInformation,setSongInformation,songs,setCurrentSong,setSongs}) => {

    // UseEffect
    useEffect(() => {
        const newSongs = songs.map((song) =>{
            if(song.id === currentSong.id){
                return{
                    ...song,
                    active : true
                }
            } else{
                return {
                    ...song,
                    active: false
                }
            }
        }) 

        setSongs(newSongs)

    },[currentSong])

  

    const audioPlayHandler = () =>{
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
        audioRef.current.play()
        setIsPlaying(!isPlaying)
        }

    }

  

    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":"  +  ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
   
    
    const dragHandler = (e) => {

      setSongInformation({...songInformation, currentTime : e.target.value})
      audioRef.current.currentTime = e.target.value
    }

    const skipTrackHandler = (direction) =>{
        let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)
        if(direction === "skip-forward"){
            setCurrentSong(songs[(currentSongIndex + 1) % songs.length])
        }
        if(direction === "skip-backward"){
            if((currentSongIndex -1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1])
                playAudio(isPlaying,audioRef)
                return
            }
            setCurrentSong(songs[(currentSongIndex - 1) % songs.length])
        }
        playAudio(isPlaying,audioRef)
        
    }

    return (
        <div className="player">
            <div className="time-controller">
                <p>{getTime(songInformation.currentTime)}</p>
                <input 
                min={0} 
                max={songInformation.duration || 0} 
                value={songInformation.currentTime} 
                onChange={dragHandler}
                type="range"/>
                <p>{songInformation.duration ? getTime(songInformation.duration) : "0.00"}</p>
            </div>

            <div className="play-controll">
                <FontAwesomeIcon  className="skip-backward" size="3x" 
                icon={faAngleLeft}
                onClick={() => skipTrackHandler("skip-backward")}
                />

                <FontAwesomeIcon  onClick={audioPlayHandler} className="play"  size="3x" icon={isPlaying ? faPause : faPlay }/>

                <FontAwesomeIcon  className="skip-forward" size="3x" 
                icon={faAngleRight}
                onClick={()=> skipTrackHandler("skip-forward")}
                />
               

            </div>
           
        </div>
    )
}



export default Player