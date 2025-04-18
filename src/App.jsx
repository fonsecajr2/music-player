import './App.css'
import { useEffect, useRef, useState } from 'react'
import { sampleSongs } from "./data/sampleSongs"
import Playlist from "./components/Playslist.jsx"
import Player from './components/Player.jsx'
import Controls from "./components/Controls.jsx"

function App() {
  //controling if is playing or paused
  const [isPlaying, setIsPlaying] = useState(false)
  //controlling the playlist 
  const [playlist, setPlaylist] = useState(sampleSongs)
  //actual song index in the playlist
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  //controlling time and duration
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  //controlling volume
  const [volume, setVolume] = useState(0.5)

  const audioRef = useRef(null)

  //function to play the song
  const playPause = function togglePlayPause () {
    if (isPlaying){
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
    
  }

  //function to time and formatTime
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

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    audioRef.current.volume = newVolume
    setVolume(newVolume)
  }

  const handleSeek = (e) => {
    const bar = e.target
    const clickX = e.nativeEvent.offsetX
    const width = bar.clientWidth
    const newTime = (clickX / width) * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  //changing song with current state of playing
  useEffect(() => {
    const audio = audioRef.current;
    audio.load()
    if (isPlaying) {
      audio.play()
    }
  }, [currentSongIndex])

  return (
    <>
      <h1 className='flex justify-center'>Music Player</h1>

      <Player
        song={playlist[currentSongIndex]}
        currentTime={currentTime}
        duration={duration}
        handleSeek={handleSeek}
      />

      <Controls
        isPlaying={isPlaying}
        playPause={playPause}
        nextSong={nextSong}
        prevSong={prevSong}
        handleVolumeChange={handleVolumeChange}
        volume={volume}
      />

      <Playlist 
        playlist={playlist}
        setCurrentSongIndex={setCurrentSongIndex}
        setPlaylist={setPlaylist}
      />

      {playlist[currentSongIndex]?.src && <audio 
        ref={audioRef}
        src = {playlist[currentSongIndex].src}
        onTimeUpdate={handleTimeUpdate}
        onEnd={nextSong}
      />}
      
    </>
  )
}

export default App
