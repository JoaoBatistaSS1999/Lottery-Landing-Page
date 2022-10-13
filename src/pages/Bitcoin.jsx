import React from "react";
import start from "../assets/utility/star.svg";
import copy from "../assets/utility/copy.png";
import winningNumber from "../assets/utility/winning-number.png";
import bitcoin from "../assets/utility/bitcoin.png";
import info from "../assets/utility/info.svg";

const Ethereum = () => {
  return (
    <div className="w-full flex justify-center bg-[#001535]">
      <div className="max-w-screen-lg w-full flex flex-col relative items-center bg-[#393939b6] p-10 text-white rounded-[29px]">
        <h2 className="text-xl font-bold mb-5">
          CURRENT SELECTED CRYPTO JACKPOT ACCUMULATED CARD
        </h2>
        <div className="flex gap-10 mb-20 border-2 text-blue-400 border-blue-400 rounded-[40px] py-5 px-10 text-3xl">
          2.35 BTC <span className="text-3xl">~</span> 90.000 USD
        </div>
        <h2 className="text-4xl font-bold mb-5">LATEST WINNERS</h2>

        {/* {ball winning} */}
        <div className="flex h-[192px] bg-[#467294c3] p-5 rounded-[34px]">
          <div className="flex">
            <div className="flex flex-col border-r border-white px-10">
              <h3>Lates raffle winner</h3>

              <span className="flex items-center gap-2 text-3xl">
                <img src={start} alt="start" />
                CLARCSON201941
              </span>

              <a href="" className="mt-10">
                <button className="flex items-center gap-2 bg-[#323965] h-[30px] w-[260px] px-4 py-3 rounded-[15px] text-sm">
                  {"0xadf9bFB903e34B25ceC47b6D1A468741fdB71F69".slice(0, 24) +
                    "..."}
                  <img src={copy} alt="copy" className="h-[15px]" />
                </button>
              </a>
            </div>

            <div className="flex flex-col pl-5 pr-10">
              <h3>Lates raffle winner</h3>

              <span className="flex items-center gap-2 text-3xl">
                <img src={start} alt="start" />
                CLARCSON201941
              </span>

              <a href="" className="mt-10">
                <button className="flex items-center gap-2 bg-[#323965] h-[30px] w-[260px] px-4 py-3 rounded-[15px] text-sm">
                  {"0xadf9bFB903e34B25ceC47b6D1A468741fdB71F69".slice(0, 24) +
                    "..."}
                  <img src={copy} alt="copy" className="h-[15px]" />
                </button>
              </a>
            </div>
          </div>

          <h3 className="rotate-[270deg] font-bold text-lg w-[100%] flex items-center justify-center p-2">
            WINNING NUMBER
          </h3>
          <img
            src={winningNumber}
            alt="winning_number"
            className="w-[286px] h-[286px] absolute translate-y-[-23%] translate-x-[270%] "
          />
        </div>

        <div>
          <div className="flex justify-between gap-2 w-full mt-16 ">
            <h3 className="flex jutify-center gap-3 items-center">
              <img
                src={bitcoin}
                alt="bitcoin"
                className="w-24 h-24 border-2 border-white rounded-full p-1"
              />
              <div className=" flex flex-col gap  py-1 px-2 h-full">
                <h4 className="flex font-bold text-2xl gap-2">
                  BITCOIN <span className="text-pink-500">BTC</span>
                </h4>
                <div>
                  <div className="flex gap-2 text-sm">
                    <p className="text-gray-400">PRICE:</p>
                    <p>45,480.15 $</p>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <p className="text-gray-400">VOLUME(24H):</p>
                    <p>7,918,153.71 $</p>
                  </div>
                </div>
              </div>
            </h3>

            <h3 className="bg-gray-700 rounded-xl w-80 flex items-center justify-center">
              chart
            </h3>
          </div>
          <div className="flex mt-3 gap-4">
            <ul className="flex flex-col gap-2">
              <li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
                TOTAL TICKED BOUGHT:{" "}
                <p className="font-bold text-xl text-white">15 865</p>
              </li>
              <li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
                PRICE OF TICKET{" "}
                <p className="font-bold text-xl flex items-center gap-3 text-white">
                  0,5 BNB <img src={info} alt="info" className="w-4 h-4" />
                </p>
              </li>
              <li className="flex font-bold  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
                TICKET VALID FOR{" "}
                <p className="font-bold text-xl flex items-center gap-3 text-white">
                  3 DRAWS <img src={info} alt="info" className="w-4 h-4" />
                </p>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
                LAST WINNER:{" "}
                <p className="font-bold text-xl text-white">CLARCSON201941</p>
              </li>
              <li className="flex font-bold border-b border-[#5153AC]  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
                PRICE ON EACH DRAW{" "}
                <p className="font-bold text-xl flex items-center gap-3 text-white">
                  2,5 BNB <img src={info} alt="info" className="w-4 h-4" />
                </p>
              </li>
              <li className="flex font-bold  text-xl text-[#5153AC] flex-col justify-center items-start py-7 px-5 w-80">
                YUOR WINNING CHANCES{" "}
                <p className="font-bold text-xl flex items-center gap-3 text-white">
                  2,4% <img src={info} alt="info" className="w-4 h-4" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethereum;
