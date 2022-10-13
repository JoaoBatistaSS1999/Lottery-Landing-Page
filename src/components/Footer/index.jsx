import logo from "../../assets/Icons/logo.png";
import telegram from "../../assets/socialIcons/telegram.png";
import twitter from "../../assets/socialIcons/twitter.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full flex justify-center py-14 sm:py-40 bg-[#001535]"
    >
      <div className="max-w-screen-2xl flex flex-col justify-center items center">
        <h2 className="flex w-full justify-center">
          <img src={logo} alt="logo" className="h-8 sm:h-14" />
        </h2>

        <div className="flex justify-center sm:justify-center p-3 gap-3 sm:gap-5 mt-7 text-[#A7AADF] font-bold text-sm sm:text-lg ">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-1"
          >
            <img src={twitter} alt="twitter" className="h-4 sm:h-6" />
            @HASHPOTTEAM
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="flex  justify-center items-center gap-1"
          >
            <img src={telegram} alt="telegram" className="h-4 sm:h-6" />
            @HASHPOTTEAM
          </a>
        </div>
        <p className=" mt-7 sm:mt-20 text-white text-xs sm:text-[15px] w-full flex justify-center">
          COPYRIGHT HASHPOT 2022. ALL RIGHT RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
