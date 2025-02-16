import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface PlayProps {
  duration: string;
}

const Play: React.FC<PlayProps> = ({ duration }) => {
  return (
    <>
      <div className=" justify-self-stretch flex flex-col items-center gap-1">
        <div className="flex text-2xl items-center gap-5">
          <Link to={"/song/2"}>
            <FontAwesomeIcon
              className="cursor-pointer transition-transform ease duration-200 hover:scale-110 hover:text-green-500"
              icon={faBackwardStep}
            />
          </Link>
          <FontAwesomeIcon
            className="cursor-pointer transition-transform ease duration-200 hover:scale-120 text-4xl hover:text-green-500"
            icon={faCirclePlay}
          />
          <Link to={"/song/3"}>
            <FontAwesomeIcon
              className="cursor-pointer transition-transform ease duration-200 hover:scale-110 hover:text-green-500"
              icon={faForwardStep}
            />
          </Link>
        </div>
        <div className="flex gap-3 items-center justify-between w-full max-w-[600px]">
          <p>00:00</p>

          <div className="w-full h-1 bg-[#666] rounded-s overflow-hidden">
            <div className="h-full w-(--_progress) bg-white transition ease duration-200"></div>
          </div>

          <p>{duration}</p>
        </div>
      </div>
    </>
  );
};

export default Play;
