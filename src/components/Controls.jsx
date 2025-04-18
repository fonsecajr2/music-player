import React from "react";

const Controls = ({
    isPlaying,
    playPause,
    nextSong,
    prevSong,
    // volume,
    // handleVolumeChange
}) => {
    return(
        <div className="controls">
            <button onClick={playPause} className="m-1">
                {isPlaying ? "Pause" : "Play"} 
            </button>
            <button onClick={nextSong} className="m-1">
                next
            </button>
            <button onClick={prevSong} className="m-1">
                prev
            </button>
        </div>
    )
}

export default Controls;