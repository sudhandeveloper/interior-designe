import React from "react";
import BlogBanner from "../assets/images/Blog/blog-banner.jpg";
const Blog = () => {
  return (
    <>
      {" "}
      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={BlogBanner}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] font-medium italic font-Barlow text-white ">
              Interior Designers BOLG
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

        {/* ========================== */}
        <section className="py-6 ">
          <h2 className="text-center font-cormantThiner mt-10 mb-3 rounded-full  font-extrabold uppercase italic text-red-600 text-[55px]">Wellcome to Our Blog</h2>
          <center><div className="w-64 h-1 mb-2 bg-black"></div></center>
          <div className="container flex flex-col justify-center p-20 mx-auto">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 sm:grid-cols-2">
              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
                {/* <img src={Ban} alt="loading" /> */}
                <h2 className="mb-2 mt-10 font-Barlow text-[20px]">MAY 11/2023</h2>
                <h2 className=" font-extrabold text-[25px]">
                  The Artistic Symphony of Design: Payal Kapoor’s Masterful
                  Microbrewery Project at Hit a Pint, Ghaziabad
                </h2>

                <p className="mt-5 text-black text-[19px] text-justify">
                  Hit a Pint- Designed by Payal Kapoor In the bustling city of
                  Ghaziabad, Uttar Pradesh, a new gem has emerged in the form of
                  Hit a Pint, a microbrewery that promises a unique experience
                  for beer enthusiasts. Behind this innovative venture stands
                  the visionary interior designer, Payal Kapoor, whose creative
                  prowess has transformed the space […]
                </p>
              </div>

              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
             
                <h2 className="mb-2 mt-10 font-Barlow text-[20px]">MAY 11/2023</h2>
                <h2 className=" font-extrabold text-[25px]">
                  The Artistic Symphony of Design: Payal Kapoor’s Masterful
                  Microbrewery Project at Hit a Pint, Ghaziabad
                </h2>

                <p className="mt-5 text-black text-[19px] text-justify">
                  Hit a Pint- Designed by Payal Kapoor In the bustling city of
                  Ghaziabad, Uttar Pradesh, a new gem has emerged in the form of
                  Hit a Pint, a microbrewery that promises a unique experience
                  for beer enthusiasts. Behind this innovative venture stands
                  the visionary interior designer, Payal Kapoor, whose creative
                  prowess has transformed the space […]
                </p>
              </div>

              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
                {/* <img src={Ban} alt="loading" /> */}
                <h2 className="mb-2 mt-10 font-Barlow text-[20px]">MAY 11/2023</h2>
                <h2 className=" font-extrabold text-[25px]">
                  The Artistic Symphony of Design: Payal Kapoor’s Masterful
                  Microbrewery Project at Hit a Pint, Ghaziabad
                </h2>

                <p className="mt-5 text-black text-[19px] text-justify">
                  Hit a Pint- Designed by Payal Kapoor In the bustling city of
                  Ghaziabad, Uttar Pradesh, a new gem has emerged in the form of
                  Hit a Pint, a microbrewery that promises a unique experience
                  for beer enthusiasts. Behind this innovative venture stands
                  the visionary interior designer, Payal Kapoor, whose creative
                  prowess has transformed the space […]
                </p>
              </div>
             
              <div className="px-6 py-5 shadow-lg font-cormantThiner rounded-2xl shadow-gray-500">
             
             <h2 className="mb-2 mt-10 font-Barlow text-[20px]">MAY 11/2023</h2>
             <h2 className=" font-extrabold text-[25px]">
               The Artistic Symphony of Design: Payal Kapoor’s Masterful
               Microbrewery Project at Hit a Pint, Ghaziabad
             </h2>

             <p className="mt-5 text-black text-[19px] text-justify">
               Hit a Pint- Designed by Payal Kapoor In the bustling city of
               Ghaziabad, Uttar Pradesh, a new gem has emerged in the form of
               Hit a Pint, a microbrewery that promises a unique experience
               for beer enthusiasts. Behind this innovative venture stands
               the visionary interior designer, Payal Kapoor, whose creative
               prowess has transformed the space […]
             </p>
           </div>
           
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blog;
