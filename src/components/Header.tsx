import LogoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 h-16 text-white">
        <Link to="/">
          <img src={LogoSpotify} alt="LogoSpotify" />
        </Link>
        <Link to="/" className="hover:underline text-3xl">
          <h1>Spotify</h1>
        </Link>
      </div>
    </>
  );
};
export default Header;
