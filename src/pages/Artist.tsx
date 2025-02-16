import { Link, useParams } from "react-router-dom";
import PlayButton from "../components/PlayButton";
import SongList from "../components/SongList";
import artistArray from "../assets/database/artists";
import songArray from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj.id === Number(id)
  )[0];

  const songsArrayFromArtist = songArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;

  console.log(randomIdFromArtist);

  return (
    <>
      <div className="mt-0 mr-2.5 mb-2.5 ml-2.5 overflow-auto">
        <div
          className="flex rounded-2xl items-end p-6 h-[40svh] bg-cover bg-[position:y-20%]"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
          }}
        >
          <h2 className="text-white text-8xl">{name}</h2>
        </div>

        <div
          className=" text-white flex flex-col gap-6 py-10 px-6"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--green-900), var(--green-950))",
          }}
        >
          <h2>Populares</h2>
          <SongList songsArray={songsArrayFromArtist} />
        </div>

        <Link to={`/song/${randomIdFromArtist}`}>
          <div className="text-5xl fixed opacity-100 transform translate-y-0 right-8 bottom-8 text-green-400 hover:transform  ease duration-200 hover:text-gren-600 hover:text-6xl">
            <PlayButton />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Artist;
