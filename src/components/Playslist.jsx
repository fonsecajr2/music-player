import React from "react";

const Playlist = ({playlist, setCurrentIndexSong}) => {
    return (
        <div>
            <ul>
                {playlist.map((song, index) => (
                    <li
                        key = {song.id}
                        onClick={() => setCurrentIndexSong(index)}
                    >
                        <div>
                            <div>{song.title}</div>
                            <div>{song.artist}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Playlist;