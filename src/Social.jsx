import React from "react";

import Telegram from "./assets/socialIcons/telegram.png";
import Twitter from "./assets/socialIcons/twitter.png";

const Social = () => {
  return (
    <div className="hidden lg:flex fixed right-0 top-[40%]">
      <ul className="flex flex-col px-3 py-6 gap-8 rounded-l-3xl bg-black">
        <li>
          <a
            href="https://www.youtube.com/watch?v=QjlFqgRbICY&list=RDQjlFqgRbICY&start_radio=1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" className="h-7" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=QjlFqgRbICY&list=RDQjlFqgRbICY&start_radio=1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Telegram} alt="telegram" className="h-7" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
