import { Link } from "react-router-dom";

interface SongItemProps {
  image: string;
  name: string;
  artist: string;
  id: string;
  duration: string;
  audio: string;
  index: number;
}

const SongItem: React.FC<SongItemProps> = ({
  image,
  name,
  artist,
  id,
  duration,
  audio,
  index,
}) => {
  return (
    <Link
      to={`/song/${id}`}
      className="flex justify-between items-center py-2.5 px-6 rounded-l gap-4 transition-color ease duration-200 hover:bg-green-800 no-underline"
    >
      <div className="flex gap-6 items-center">
        <p>{index + 1}</p>
        <div className="flex gap-3 items-center">
          <img
            src={image}
            alt={`Imagem da música${name}`}
            className="w-10 h-10 rounded-sm"
          />

          <p className=" hover:underline">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
