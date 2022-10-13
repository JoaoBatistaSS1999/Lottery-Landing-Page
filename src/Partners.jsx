const Partners = () => {
  return (
    <section className="w-full flex justify-center bg-[#001535]">
      <div className="max-w-screen-2xl w-full gap-3 flex flex-col items-center py-5 px-3">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl flex w-full font-bold justify-center mb-3 xl:justify-start text-white">
            POWERED BY:
          </h3>
          <div>
            <ul className="flex gap-3 flex-wrap justify-center items-center">
              <li className="w-[260px] h-[100px] bg-gray-400 flex justify-center items-center text-white text-2xl">
                260x100
              </li>
              <li className="w-[260px] h-[100px] bg-gray-400 flex justify-center items-center text-white text-2xl">
                260x100
              </li>
              <li className="w-[260px] h-[100px] bg-gray-400 flex justify-center items-center text-white text-2xl">
                260x100
              </li>
              <li className="w-[260px] h-[100px] bg-gray-400 flex justify-center items-center text-white text-2xl">
                260x100
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
