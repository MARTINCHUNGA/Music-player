

import React from 'react'
import {playAudio} from '../util'

const LibrarySong = ({song,setCurrentSong,songs,id,audioRef,isPlaying,setSongs}) => {
   
    const songSelectionHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id)
        setCurrentSong(selectedSong[0])

        // Add active state
        const newSongs = songs.map((song) =>{
            if(song.id === id){
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

        // check if the song is playing
        playAudio(isPlaying,audioRef)
        
        console.log(selectedSong)
    }

    return (
        <div onClick={songSelectionHandler} className={`library-song ${song.active ? 'selected' : " "}`}>
            <img src={song.cover} alt={song.cover}/> 
            <div className="song-description">
               <h2>{song.name}</h2>
               <h3>{song.artist}</h3>
             </div>
        </div>
    )
}



export default LibrarySong