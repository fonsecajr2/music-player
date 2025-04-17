import './App.css'
import { useRef, useState } from 'react'
import { sampleSongs } from "./data/sampleSongs"
import Playlist from "./components/Playslist.jsx"
import Player from './components/Player.jsx'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlist, setPlaylist] = useState(sampleSongs)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef(null)

 const playPause = function togglePlayPause () {
    if (isPlaying){
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    setCurrentTime(audio.currentTime)
    setDuration(audio.duration)
  }

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length)
  }

  const prevSong = () => {
    setCurrentSongIndex((prevIndex)=> prevIndex === 0 ? playlist.length - 1 : (prevIndex - 1))
  }

  return (
    <>
      <h1 className='bg-amber-200'>Music Player</h1>

      <Player
        song={playlist[currentSongIndex]}
      />

      <Playlist 
        playlist={playlist}
        setCurrentSongIndex={setCurrentSongIndex}
      />

      <audio 
        ref={audioRef}
        src = {playlist[currentSongIndex].src}
        // onTimeUpdate={handleTimeUpdate}
        // onEnd={nextSong}
      />
    </>
  )
}

export default App
