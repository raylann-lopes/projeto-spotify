import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link
      to="/song/1"
      className="flex justify-between items-center py-2.5 px-6 rounded-l gap-4 transition-color ease duration-200 hover:bg-green-800 no-underline"
    >
      <div className="flex gap-6 items-center">
        <p>1</p>
        <div className="flex gap-3 items-center">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem da música"
            className="w-10 h-10 rounded-sm"
          />

          <p className="hover:no-underline">
            A ultima saudade - Henrique e Juliano
          </p>
        </div>
      </div>

      <p>02:30</p>
    </Link>
  );
};

export default SongItem;
