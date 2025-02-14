import { Link } from "react-router-dom";
import PlayButton from "../components/PlayButton";
import SongList from "../components/SongList";

const Artist = () => {
  return (
    <>
      <div className="mt-0 mr-2.5 mb-2.5 ml-2.5 overflow-hidden">
        <div
          className="flex rounded-2xl items-end p-6 h-[40svh] bg-cover bg-[position:y-20%]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--_shade), var(--_shade)),url(https://i.scdn.co/image/ab67618600001016e2952bec9cfd4e6862e23607)",
          }}
        >
          <h2 className="text-white text-8xl">Jorge & Matheus</h2>
        </div>

        <div
          className=" text-white flex flex-col gap-6 py-10 px-6"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--green-900), var(--green-950))",
          }}
        >
          <h2>Populares</h2>
          <SongList />
        </div>

        <Link to="/artist/1">
          <div className="fixed opacity-1 transform translate-y-0 right-6 bottom-6">
            <PlayButton />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Artist;
