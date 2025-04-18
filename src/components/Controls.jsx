import React from "react";
import Button from "./ui/Button";

const Controls = ({
    isPlaying,
    playPause,
    nextSong,
    prevSong,
    // volume,
    // handleVolumeChange
}) => {
    return(
        <div className="flex items-center justify-center gap-4 my-6" >
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
    )
}

export default Controls;