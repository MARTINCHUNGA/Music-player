
import React,{useState,useRef} from 'react'
import './Styles/App.scss'
import Player from './Components/Player'
import Song from './Components/Song'
import data from './data'
import Library from './Components/Library'
import Nav from './Components/Nav'


function App() {

  const audioRef = useRef(null)

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying,setIsPlayig] = useState(false)
  const [songInformation, setSongInformation] = useState({
    currentTime : 0,
    duration : 0
})
  const [songListStatus, setSongListStatus] = useState(false)

  const updateTimeHandler = (e) => {
  const current = e.target.currentTime
  const duration = e.target.duration
  setSongInformation({...songInformation, currentTime : current, duration})


}
  

  return (
    <div className="App">
     <Nav

      songListStatus={songListStatus} 
      setSongListStatus={setSongListStatus}

      />

     <Song currentSong={currentSong}/>

     <Player 
     songInformation={songInformation}
     setSongInformation={setSongInformation}
     audioRef={audioRef}
     isPlaying={isPlaying} 
     setIsPlaying={setIsPlayig} 
     currentSong={currentSong}
     songs={songs}
     setCurrentSong={setCurrentSong}
     setSongs={setSongs}
     />

     <Library 
     setCurrentSong={setCurrentSong} 
     songs={songs} 
     audioRef={audioRef}
     isPlaying={isPlaying}
     setSongs={setSongs}
     songListStatus={songListStatus}
     />

    
     <audio 
            onTimeUpdate={updateTimeHandler} 
            onLoadedMetadata={updateTimeHandler} 
            ref={audioRef} 
            src={currentSong.audio}
            ></audio>
  
    </div>
  );
}

export default App;
