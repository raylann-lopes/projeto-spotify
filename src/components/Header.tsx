import LogoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 h-16 text-white">
        <img src={LogoSpotify} alt="LogoSpotify" />

        <a href="#" className=" hover:underline text-3xl">
          Spotify
        </a>
      </div>
    </>
  );
};
export default Header;
