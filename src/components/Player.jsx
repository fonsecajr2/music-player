import React from "react";

const Player = ( {song} ) => {
    return (
        <div>
            <h1>{song.title}</h1>
            <p>{song.artist}</p>
        </div>
    )
}

export default Player