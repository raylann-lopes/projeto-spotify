import Artists from "./Artists";
import Songs from "./songs";

const Main = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#062d14] to-black rounded-2xl flex p-5 flex-col justify-between mt-0 ml-2.5 mr-2.5 mb-2.5 gap-10 text-white">
      <div className="flex flex-col gap-2.5 p-0">
        <div className="flex items-center justify-between leading-normal">
          <h2 className="text-2xl">Artistas Populares</h2>
          <a className="hover:underline" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-9">
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between leading-normal">
            <h2 className="text-2xl">Artistas Populares</h2>
            <a className="hover:underline" href="/">
              Mostrar tudo
            </a>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
