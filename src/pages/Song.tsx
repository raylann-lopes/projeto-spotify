import { Link, useParams } from "react-router-dom";
import Play from "../components/Play";
import songsArray from "../assets/database/songs";
import artistArray from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2].id;

  return (
    <div className="grid grid-rows-1 flex-1">
      <div
        className="my-0 mx-5 rounded-tr-2xl rounded-tl-2xl flex justify-center items-center p-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--green-800), var(--green-950))",
        }}
      >
        <div className="shadow-(--_shadow)">
          <img src={image} alt={`Image da Musica ${name}`} />
        </div>
      </div>
      <div className="grid grid-cols-[20%_60%_20%] place-items-center bg-black text-white gap-4 py-4 px-6">
        <div className="justify-self-start rounded-l overflow-hidden">
          <Link to={`/artist/${artistObj.id}`}>
            <img
              width={75}
              height={75}
              src={artistObj.image}
              alt={`Image do artista ${artistObj.name}`}
            />
          </Link>
        </div>
        <Play
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
        />
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
