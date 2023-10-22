import React from "react";
import Gallarybanner from "../assets/images/gallary/Gallary-image-banner.jpg";
import GallaryComponent from "../components/Gallary-component/gallarys-components";

import GallaeyImageOne from "../assets/images/gallary/1-min.jpg";
import GallaeyImageTwo from "../assets/images/gallary/2-min.jpg";
import GallaeyImageThree from "../assets/images/gallary/4-min.jpg";
import GallaeyImageFour from "../assets/images/gallary/5-min.jpg";
import GallaeyImageFive from "../assets/images/gallary/6-min.jpg";
import GallaeyImageSix from "../assets/images/gallary/7-min.jpg";
import GallaeyImageSeven from "../assets/images/gallary/8-min.jpg";
import GallaeyImageEight from "../assets/images/gallary/9-min.jpg";
import GallaeyImageNine from "../assets/images/gallary/11-min.jpg";
import GallaeyImageEleven from "../assets/images/gallary/12-min.jpg";
import GallaeyImageTwelve from "../assets/images/gallary/14-min.jpg";
import GallaeyImageThirteen from "../assets/images/gallary/15-min.jpg";
import GallaeyImageFourtheen from "../assets/images/gallary/17-min.jpg";
import GallaeyImageSixteen from "../assets/images/gallary/18-min.jpg";
import GallaeyImageSeventeen from "../assets/images/gallary/19-min.jpg";
import GallaeyImageEighteen from "../assets/images/gallary/20-min.jpg";

const Gallary = () => {
  return (
    <>
      <section>
        <section>
          <div className="relative h-96 max-md:h-[500px]">
            <img
              className="object-cover w-full h-full"
              src={Gallarybanner}
              alt="loading"
            />

            <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

            <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
              <h2 className="text-[38px] font-medium italic font-Barlow text-white ">
                Interior Designers GALLARY
              </h2>
              <h2 className="text-[65px] font-semibold font-Barlow text-white ">
                INDDECORE INTERIO
              </h2>
              <div className="w-20 h-[1px] bg-red-600"></div>
              <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-red-600 font-cormantThiner tracking-wider]">
                Hire us
              </button>
            </div>
          </div>
        </section>

        {/* -------------------------------------------- */}
        <section>
          <div className="m-10">
            <h2 className="text-center text-[40px] font-cormantThiner font-extrabold">
              PERSONAL TOUCH BY{}
              <span className="text-red-600">INDDECORE INTERIO </span>
            </h2>
            <center><div className="w-40 h-1 mt-3 mb-3 bg-red-600 rounded-full"></div></center>
          </div>
        </section>

        {/* =================== Image Collection =================== */}
        <section className="py-6 ">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
              <GallaryComponent img={GallaeyImageOne} />

              <GallaryComponent img={GallaeyImageTwo} />

              <GallaryComponent img={GallaeyImageThree} />

              <GallaryComponent img={GallaeyImageFour} />

              <GallaryComponent img={GallaeyImageFive} />

              <GallaryComponent img={GallaeyImageSix} />

              <GallaryComponent img={GallaeyImageSeven} />

              <GallaryComponent img={GallaeyImageEight} />

              <GallaryComponent img={GallaeyImageNine} />

              <GallaryComponent img={GallaeyImageEleven} />

              <GallaryComponent img={GallaeyImageTwelve} />

              <GallaryComponent img={GallaeyImageThirteen} />

              <GallaryComponent img={GallaeyImageFourtheen} />

              <GallaryComponent img={GallaeyImageSixteen} />

              <GallaryComponent img={GallaeyImageSeventeen} />

              <GallaryComponent img={GallaeyImageEight} />

              <GallaryComponent img={GallaeyImageEighteen} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Gallary;
