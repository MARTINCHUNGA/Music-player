

import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import LibrarySong from './LibrarySong'


const Library = ({songs,setCurrentSong,audioRef,isPlaying,setSongs,songListStatus}) => {
    return (
        <div className={`Library ${songListStatus ? `active-library` : " "}`}>
          <h2>Song List</h2>
             <div className="Library-songs">
                {songs.map(song => 
                       <LibrarySong  
                       setCurrentSong={setCurrentSong} 
                       songs={songs} 
                       song={song}
                       id={song.id}
                       key={song.id}
                       audioRef={audioRef}
                       isPlaying={isPlaying}
                       setSongs={setSongs}
                       />)}
             </div>
        
        </div>
    )
}

export default Library