import React from "react";

import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Footerbg from "../../assets/images/home/footerbg.webp";
// bg-[#00677f]
const Footer = () => {
  return (
    <>
      <section>
        <div className="relative w-full h-full ">
          <div>
            <section className="pt-10 pb-16 bg-gray-200">
              <div className="px-10 pb-10 max-sm:pb-3">
                <div className="flex flex-wrap gap-20 mt-5 max-sm:gap-5">
                  <div className="w-[20%] h-auto max-md:w-full">
                    <img
                      className="object-contain "
                      src={""}
                      alt="loading"
                    />
                    <p className="mt-5 text-justify text-black font-Barlow">
                      The Royal Interior give most important for satisfying our
                      client needs they are what need to think us
                    </p>
                  </div>

                  <div className="">
                    <div className="">
                      <h2 className="text-[23px]   text-black">
                        Important Links
                      </h2>

                      <ul className="mt-2 font-medium text-black font-Barlow">
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span className="">About us </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>Services </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>Portfolio </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>Contact Us </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="">
                    <div>
                      <h2 className="text-[23px]   text-black">Our Services</h2>

                      <ul className="mt-2 font-medium text-black font-Barlow">
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span className=""> Renovations and Remodels</span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span> Commercial </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>Corporate Interiors </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span> Full Home Furnishing</span>
                        </li>
                        {/* <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-red-600" />
                          <span>Privacy policy </span>
                        </li> */}
                      </ul>
                    </div>
                  </div>

                  <div className="w-[25%] max-md:w-full">
                    <div>
                      <h2 className="text-[23px]   text-black">Contact Us</h2>

                      <ul className="mt-2 font-medium text-black font-Barlow">
                        <li className="flex ">
                          <BsFillTelephoneForwardFill className="mt-1 mr-4 text-red-600" />
                          <span className=""> +91 98418 33554</span>
                        </li>
                        <li className="flex ">
                          <BiLogoGmail className="mt-1 mr-4 text-red-600" />
                          <span>sales@perilinteriors.com </span>
                        </li>
                        <li className="flex ">
                          <FaLocationDot className="mt-1 text-[25px] mr-4 text-red-600" />
                          <span className="text-justify">
                            Medavakkam Branch: No 1/12, Jalladianpet, Ricemill
                            Road, Medavakkam, Chennai - 600100.{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="absolute bottom-0 ">
            <img src={Footerbg} alt="loading" />
          </div>
        </div>

        <div className="flex justify-between px-10 py-2 text-white bg-gray-700 font-Barlow">
          <p>Design and Developed by Ulix Technology.</p>
          <p className="text-end">
            Copyright © Inddo Interiors All rights reserved
          </p>
        </div>
        
      </section>
      {/* ========================== */}
    </>
  );
};

export default Footer;
