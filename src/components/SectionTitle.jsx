import React from "react";

const SectionTitle = ({ titleText1, titleText2 }) => {
  return (
    <div className="section-title">
      <h2 className="pt-2 text-center font-bold text-[45px]">
        {titleText1}
        <span className="text-[#0ef]">{titleText2}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
