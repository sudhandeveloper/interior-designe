import React from "react";

const Whychooseus = (props) => {
  return (
    <div className="px-10 py-10 bg-white rounded-xl">
      <center>
        <div className="rounded-full w-20 h-20 border-[2px] border-black">
          <h2 className="mt-5 text-[30px]">{props.h2}</h2>
        </div>
        <h2 className="mt-5 text-[25px] font-extrabold text-black font-cormantThiner">
          {props.heading}
        </h2>
        <p className="mt-5 text-[18px] font-extrabold text-black font-cormantThiner">
          {props.para}
        </p>
      </center>
    </div>
  );
};

export default Whychooseus;
