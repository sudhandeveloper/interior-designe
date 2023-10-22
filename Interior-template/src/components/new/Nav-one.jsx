import React, { useState } from "react";


import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const NavOne = () => {
  const [drawer, setDrawer] = useState("false");

  const clickerhandler = () => {
    setDrawer(!drawer);
    console.log(drawer);
  };

  return (
    <>
      <section>
        <div className="flex h-auto text-white bg-black shadow-lg ">
          <div className="w-[100%]  justify-end  h-auto ">
            <ul className="flex justify-end gap-3 pr-10 sm:pb-2 max-sm:gap-0 max-sm:flex font-RobatoCondensed">
              <li className="pt-4 pl-2 max-sm:w-full max-sm:text-center">
                +91 7558 999 111
              </li>
              <li className="pt-5">
                <div className="w-[1.2px] h-4 max-sm:hidden bg-orange-600"></div>
              </li>
              <li className="pt-4 tracking-wider max-sm:text-center max-sm:w-[100%] max-sm:pb-3 ">
                marketing@d2rinteriors.com
              </li>
              <li className="pt-5">
                <div className="w-[1.2px] h-4 max-sm:hidden bg-orange-600"></div>
              </li>
              <li className="mt-[10px] max-sm:hidden">
                <button className="px-3 py-1 font-serif text-white bg-red-600 border-2 border-red-600 ">
                  <span>Contact us</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ------- */}
        <div className=" h-[70px] max-md:h-auto  max-md:pb-2  text-red-500 shadow-lg ">
          <div className="w-full pt-3 md:hidden pl-[88%]">
            <div
              className="w-[100%] text-right text-[25px] text-black"
              onClick={clickerhandler}
            >
              {drawer ? <FaBars /> : <AiOutlineClose />}
            </div>
          </div>

          <div
            className={`z-30 flex max-md:flex-col  ${
              drawer ? "max-md:hidden" : "show helo"
            }`}
          >
            <div className="w-auto h-auto pt-1 pl-10 max-md:hidden max-lg:pl-2 max-lg:pr-3">
              <img
                className="object-contain h-[60px] "
                src={""}
                alt="loading"
              />
            </div>
            <div className="w-full h-full ">
              <ul className="md:pt-6  max-md:flex-col  max-md:pb-5 justify-end pr-36 max-lg:pr-10 max-md:pr-0 flex head-ul cursor-default  h-auto md:gap-5 text-[16px] text-black uppercase font-serif tracking-wide ">
                <li className="he one max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to="about-us"> About Us</Link>
                </li>
                <li className="relative max-md:h-auto max-md:w-auto servicesmenu max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <span className="he">Services </span>
                  <div className="absolute z-20 max-md:static w-80 servicedropdownitem top-5">
                    <div className="py-3 pl-2 pr-2 mt-8 bg-white rounded-md max-md:mt-2 innerserviceitem ">
                      <ul>
                        <li className="pb-2 he border-b-[1px] border-b-gray-100">
                          <Link to={"Home-interiories"}> Home Interiors </Link>
                        </li>
                        <li className="pb-2 he pt-2 border-b-[1px] border-b-gray-100">
                          <Link to={"Commercial-interior"}>
                            Commercisal Interios{" "}
                          </Link>
                        </li>
                        <li className="pt-2 he border-b-[1px] border-b-gray-100">
                          <Link to={"Corporate-interior"}>
                            Corporate Office Intereriors{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="he max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"Gallary"}>Gallery </Link>
                </li>
                <li className="he max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to="Contact-us">Contact</Link>
                </li>
                <li className="he max-md:pt-3 max-md:pl-5 max-md:pb-2 ">
                  <Link to={"Blog"}>Blog </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavOne;
