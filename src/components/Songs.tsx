import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Songs = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(172px,1fr))]">
      <div className="py-6 px-4 flex flex-col items-center gap-2.5 rounded-2xl transform transition duration-200 ease-in-out hover:bg-green-900 hover:no-underline ">
        <div className="relative">
          <div className="flex w-40 h-40 overflow-hidden items-center justify-center rounded-full ">
            <img
              className="w-full h-auto block"
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt=""
            />
            <FontAwesomeIcon
              className="absolute right-2 bottom-2 text-green-400 opacity-0 hover:opacity-100 text-5xl transform translate-y-full hover:translate-y-0 ease duration-200"
              icon={faCirclePlay}
            />
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <div className="second-line">
            <p className="font-semibold">Henrique e Juliano</p>
            <p className="text-sm">Artista</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
