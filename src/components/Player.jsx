import React from "react";
import Section from "./ui/Section";
import { formatTime } from "../utils/formatTime";

const Player = ({ song, currentTime, duration }) => {
  return (
    <Section className="text-center">
      <img
        src={song.cover}
        alt="Cover"
        className="w-40 h-40 rounded-lg mx-auto shadow-lg"
      />
      <h2 className="text-xl font-semibold mt-4">{song.title}</h2>
      <p className="text-gray-600">{song.artist}</p>
      <div className="time-info">
        <span>{formatTime(currentTime)}</span>
        <span> </span>
        <span>{formatTime(duration)}</span>
      </div>
    </Section>
  );
};

export default Player;
