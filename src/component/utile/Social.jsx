import React from "react";

const Social = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/socal"
        className=" w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5sm
    h5
     transition-all divide-purple-200 hover:scale-110  "
      />
    </>
  );
};

export default Social;
