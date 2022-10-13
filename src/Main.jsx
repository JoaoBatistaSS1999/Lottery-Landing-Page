import React from "react";
import { Outlet, Link } from "react-router-dom";

const Main = () => {
  return (
    <section className="w-full flex justify-center bg-[#001535]">
      <div className="max-w-screen-lg w-full flex justify-center">
        <div className="flex flex-col items-center w-full">
          <nav className="lg:ml-14 bg-[#001535] max-w-screen-xl w-full flex justify-center lg:justify-start">
            <ul className="flex gap-1 font-bold text-white">
              <Link to="/" className="link">
                <li className="cursor-pointer bg-black rounded-t-xl h-full p-2 w-14 sm:w-28 text-[12px] flex items-center justify-center">
                  BTC
                </li>
              </Link>

              <Link to="/ethereum" className="link">
                <li className="cursor-pointer bg-black rounded-t-xl h-full p-2 w-14 sm:w-28 text-[12px] flex items-center justify-center">
                  ETH
                </li>
              </Link>
              <Link to="/krstm" className="link">
                <li className="cursor-pointer bg-black rounded-t-xl h-full p-2 w-14 sm:w-28 text-[12px] flex items-center justify-center">
                  KRSTM
                </li>
              </Link>
              <Link to="/matic" className="link">
                <li className="cursor-pointer bg-black rounded-t-xl h-full p-2 w-14 sm:w-28 text-[12px] flex items-center justify-center">
                  MATIC
                </li>
              </Link>
              <Link to="/my-tickets" className="link">
                <li className="cursor-pointer bg-black rounded-t-xl h-full p-2 w-14 sm:w-28 text-[12px] flex text-center items-center justify-center">
                  MY TICKETS
                </li>
              </Link>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Main;
