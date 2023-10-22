import React from "react";
import CommercialImage from "../../assets/images/Services-images/Commercial-image-interior/Commercial-image-three.jpg";
import CommercialInteriorComponent from "../../components/service-components/commercal-interior";
import Showroom from "../../assets/images/Services-images/Commercial-image-interior/Showroom.jpg";
import BeaytyParlour from "../../assets/images/Services-images/Commercial-image-interior/Beauty-parlour.jpeg";
import Saloon from "../../assets/images/Services-images/Commercial-image-interior/Saloon.jpg";
import ReadymadeShops from "../../assets/images/Services-images/Commercial-image-interior/readymadeshop.jpg";
import Cardshowroom from "../../assets/images/Services-images/Commercial-image-interior/Carshowroom.jpg";
import Bakery from "../../assets/images/Services-images/Commercial-image-interior/Bakery.jpg";
import Reasturent from "../../assets/images/Services-images/Commercial-image-interior/Reasturent.jpg";
import RetailShowroom from "../../assets/images/Services-images/Commercial-image-interior/Retailshowroom.jpg";
import CorporateOffice from "../../assets/images/Services-images/Commercial-image-interior/Corporate-office.jpg";
import School from "../../assets/images/Services-images/Commercial-image-interior/School.jpg";
import Colleges from "../../assets/images/Services-images/Commercial-image-interior/College.jpg";
import SuperMarket from "../../assets/images/Services-images/Commercial-image-interior/Supermarket.jpg";



const Commercial = () => {
  return (
    <>
      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={CommercialImage}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] font-medium italic font-Barlow text-white ">
              Commercial Interior Designers In Chennai
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
      {/* ========================== Best Residential Interior Designers in Chennai ============= */}
      <section>
        <div className="mt-10">
          <h2 className="text-[38px] max-md:px-5 max-md:text-[25px] text-center text-red-600 font-medium italic font-Barlow ">
            Corporate Office Interior Designers in Chennai
          </h2>

          <h2 className="text-[50px] font-cormantThiner uppercase max-lg:px-20 max-sm:text-[30px] max-sm:px-6 max-lg:text-[45px] px-56 font-bold text-center text-gray-600   ">
            Our Corporate Office Interior Designing Services
          </h2>

          <center>
            <div className="w-36 h-[2px] mt-5 bg-red-600"></div>
          </center>

          <p className="px-48 mt-5 font-bold text-center text-[25px] text-gray-600 max-md:px-10 max-sm:px-6 font-cormantThiner">
            We are the professional interior designers in chennai. Being the
            best interior designers in chennai, our consistently developing
            customer base stands declaration to our quality models.
          </p>
        </div>

        {/* ====================================================================== */}
        <section>
          <div className="px-16 mt-16 max-md:px-6">
            <section className="py-6">
              <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <CommercialInteriorComponent
                    img={Showroom}
                    heading="
                    Showrooms"
                  />

                  <CommercialInteriorComponent
                    img={BeaytyParlour}
                    heading="
                    Beauty Parlour"
                  />

                  <CommercialInteriorComponent
                    img={Saloon}
                    heading="
                    Saloon"
                  />

                  <CommercialInteriorComponent
                    img={ReadymadeShops}
                    heading="
                    Readymade Shops"
                  />

                  <CommercialInteriorComponent
                    img={Cardshowroom}
                    heading="
                    Car Showroom"
                  />

                  <CommercialInteriorComponent img={Bakery} heading="Bakery" />

                  <CommercialInteriorComponent
                    img={Reasturent}
                    heading="
                    Restaurant"
                  />

                  <CommercialInteriorComponent
                    img={RetailShowroom}
                    heading="
                    Retail Showroom"
                  />

                  <CommercialInteriorComponent
                    img={CorporateOffice}
                    heading="
                    Corporate Office"
                  />

                  <CommercialInteriorComponent
                    img={School}
                    heading="
                    Schools"
                  />

                  <CommercialInteriorComponent
                    img={Colleges}
                    heading="
                 Colleges"
                  />

                  <CommercialInteriorComponent
                    img={SuperMarket}
                    heading=" Supermarket"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Commercial;
