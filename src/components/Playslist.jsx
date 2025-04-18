import React from "react";
import Section from "./ui/Section";

const Playlist = ({ playlist, setCurrentSongIndex }) => {
    return (
        <Section>
        <h3 className="text-lg font-semibold mb-2 text-center">Playlist</h3>
        <ul className="divide-y divide-gray-200">
            {playlist.map((song, index) => (
            <li
                key={song.id}
                onClick={() => setCurrentSongIndex(index)}
                className="p-3 hover:bg-gray-100 cursor-pointer"
            >
                <div className="font-medium">{song.title}</div>
                <div className="text-sm text-gray-500">{song.artist}</div>
            </li>
            ))}
        </ul>
        </Section>
    );
};

export default Playlist;
