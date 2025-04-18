import React from "react";
import Button from "./ui/Button";

const Controls = ({
    isPlaying,
    playPause,
    nextSong,
    prevSong,
    volume,
    handleVolumeChange
}) => {
    return(
        <div className="flex flex-col items-center justify-center gap-4 my-6" >
            <div className="flex items-center justify-center gap-2">
                <Button onClick={prevSong} variant="default">
                    prev
                </Button>
                <Button onClick={playPause} variant="primary">
                    {isPlaying ? "Pause" : "Play"} 
                </Button>
                <Button onClick={nextSong} variant="default">
                    next
                </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2">
                <input 
                    type="range" 
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}   
                />
            </div>
            
            
        </div>
    )
}

export default Controls;