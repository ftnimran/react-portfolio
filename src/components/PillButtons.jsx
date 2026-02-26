import React from "react";

const PillButtons = ({ btnText, url }) => {
  return (
    <>
      <a
        className="inline-block px-7 py-3 bg-[#0ef] rounded-[40px] text-[16px] text-[#081b29] tracking-[1px] no-underline font-semibold opacity-0 transition-all duration-500 ease-in-out animate-slideTop [animation-delay:2s] shadow-[0_0_5px_#0ef,0_0_25px_#0ef] hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_50px_cyan,0_0_100px_cyan,0_0_200px_cyan]"
        href={url}
      >
        {btnText}
      </a>
    </>
  );
};

export default PillButtons;
