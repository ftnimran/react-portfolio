import React from "react";

const IconButtons = ({ btnText, url, nextwindows, index }) => {
  return (
    <>
      <a
        className="inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-[#0ef] rounded-full text-[20px] text-[#0ef] no-underline transition-all duration-500 ease-in-out opacity-0 animate-slideLeft [animation-delay:calc(0.2s*var(--i))] my-7 mr-3 hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef]"
        href={url}
        target={nextwindows}
        style={{ "--i": index }}
      >
        {btnText}
      </a>
    </>
  );
};

export default IconButtons;
