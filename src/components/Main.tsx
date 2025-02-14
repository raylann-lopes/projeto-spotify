import artistArray from "../assets/database/artists";
import songsArray from "../assets/database/songs";
import ItemList from "./ItemList";

interface MainProps {
  type: "artists" | "songs" | "mainPage";
}

const Main = ({ type }: MainProps) => {
  return (
    <>
      <div className=" bg-gradient-to-b from-[#062d14] to-black rounded-2xl flex p-5 flex-col justify-between mt-0 ml-2.5 mr-2.5 mb-2.5 gap-10 text-white">
        {/* Artist List */}
        {type === "artists" || type === "mainPage" ? (
          <ItemList
            title="Artistas"
            items={Array(10).fill(null)}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        ) : (
          <></>
        )}

        {/* Music List */}
        {type === "songs" || type === "mainPage" ? (
          <ItemList
            title="Musicas"
            items={Array(20).fill(null)}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Main;
