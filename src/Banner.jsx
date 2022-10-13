const Banner = () => {
  return (
    <div className="w-full flex justify-center bg-[#001535] h-96 py-5 border ">
      <div className="max-w-screen-2xl w-full text-white pt-0 flex flex-col items-center gap-5 text-3xl sm:text-[43px] lg:flex-row lg:text-[50px] lg:justify-center font-bold">
        <p className="bg-gradient-to-r from-[#17e5fc] to-[#e717e9] lg:mr-2 p-2 ">
          WINNING
        </p>{" "}
        HAS NEVER BEEN{" "}
        <p className="bg-gradient-to-r from-[#17e5fc] to-[#e717e9] lg:ml-2 p-2">
          EASIER.
        </p>
      </div>
    </div>
  );
};

export default Banner;
