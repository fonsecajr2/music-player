import './App.css'
import { use, useRef, useState } from 'react'
import { sampleSongs } from "./data/sampleSongs"

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

  return (
    <>
      <h1 className='bg-amber-200'>Music Player</h1>

      <Audio ref={audioRef}
        src = {playlist[currentSongIndex].src}
        onTimeUpdate={handleTimeUpdate}
        onEnd={nextSong}
      />
    </>
  )
}

export default App
