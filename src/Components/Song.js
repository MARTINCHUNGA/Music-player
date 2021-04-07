
import React from 'react'

const Song = ({currentSong}) => {
    console.log(currentSong)

    return (
        <div className="song-player">
            <img src={currentSong.cover} alt="#"/> 
             <h2>{currentSong.name}</h2>
             <h3>{currentSong.artist}</h3>
        </div>
    )
}



export default Song