import { useState } from "react";
import SongItem from "./SongItem";

interface Song {
  id: number;
  image: string;
  name: string;
  duration: string;
  artist: string;
  audio: string;
}

interface SongListProps {
  songsArray: Song[];
}

const SongList = ({ songsArray }: SongListProps) => {
  const [items, setItems] = useState(5);

  return (
    <div className="songList">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem
            {...currentSongObj}
            id={currentSongObj.id.toString()}
            index={index}
            key={index}
          />
        ))}
      <p
        className="font-bold ml-6 mt-5 cursor-pointer hover:underline"
        onClick={() => setItems(items + 5)}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
