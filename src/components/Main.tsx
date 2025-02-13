import artistArray from "../assets/database/artists";
import songsArray from "../assets/database/songs";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-[#062d14] to-black rounded-2xl flex p-5 flex-col justify-between mt-0 ml-2.5 mr-2.5 mb-2.5 gap-10 text-white">
        {/* Artist List */}
        <ItemList
          title="Artistas"
          items={Array(5).fill(null)}
          itemsArray={artistArray}
          itemsMore="/artists"
          idItemsMore="/artist"
        />

        {/* Music List */}
        <ItemList
          title="Musicas"
          items={Array(10).fill(null)}
          itemsArray={songsArray}
          itemsMore="/songs"
          idItemsMore="/song"
        />
      </div>
    </>
  );
};

export default Main;
