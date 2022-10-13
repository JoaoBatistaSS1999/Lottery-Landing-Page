const LogItem = () => {
  return (
    <li className=" p-1 flex items-center justify-around gap-2">
      <p className=" text-sm md:font-bold md:text-lg text-[#8E90FF]">
        FEB.20TH 2022 6:40PM
      </p>
      <button className="border border-white text-white text-sm md:font-bold md:text-lg rounded-[16px] h-8 w-24">
        DRAW
      </button>
      <div className="flex flex-col lg:flex-row lg:gap-3">
        <p className="font-bold text-[#8E90FF] text-xs lg:text-lg">WINNERS:</p>

        <p className="flex lg:hidden text-xs text-white">JOHNWICKASS9087...</p>

        <p className="hidden lg:flex font-bold text-white">
          JOHNWICKASS9087, BIGBUNNY2301, PHILIPMORRIS
        </p>
      </div>

      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noreferrer"
        className="font-bold text-[#8E90FF]"
      >
        +2 more
      </a>
    </li>
  );
};

export default LogItem;
