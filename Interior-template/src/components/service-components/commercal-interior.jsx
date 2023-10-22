import React from "react";

const CommercialInterior = (props) => {
  return (
    <>
      <section>
        <div className="relative w-auto h-auto Baner-black-white">
          <img
            className="object-cover h-[350px] w-full"
            src={props.img}
            alt="loading"
          />
          <div className="absolute top-0 z-10 w-full h-full bg-gray-800 opacity-40"></div>
          <div className="absolute top-0 z-20 w-full h-full pt-56 px-11">
            <div className="h-[50%] ">
              <h2 className="text-white font-cormantThiner font-extrabold text-[35px]">
                {props.heading}
              </h2>
              <div className="w-20 h-1 mb-2 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommercialInterior;
