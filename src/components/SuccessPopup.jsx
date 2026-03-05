import React from "react";

const SuccessPopup = ({ show }) => {
  return (
    <div
      className={`fixed z-50 transition-all duration-500 top-20 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 ${show ? "opacity-100 md:translate-x-0" : "opacity-0 md:translate-x-full pointer-events-none"}`}
    >
      <div className="flex items-center gap-3 px-5 py-4 md:px-8 md:py-5 rounded-xl text-sm md:text-lg bg-[rgba(0,238,255,0.9)] text-[#081b29] font-semibold shadow-[0_10px_30px_rgba(0,238,255,0.4)]">
        <i className="bx bx-check-circle text-2xl md:text-3xl"></i>
        Message Sent Successfully!
      </div>
    </div>
  );
};

export default SuccessPopup;
