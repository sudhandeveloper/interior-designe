import React from "react";
import AboutImage from "../assets/images/aboutus/About-us.jpg";
import AboutImageTwo from "../assets/images/aboutus/Aboutus-image-Two.jpg";
import AboutImageThree from "../assets/images/aboutus/Image-three-aboutus.jpg";

import Whychooseus from "../components/About-us-components/why-choose-us";
import { IoBagHandle } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Aboutus = () => {
  return (
    <>
      <section className="">
        <div className="relative w-full h-auto ">
          <img
            className="object-cover w-full h-full max-lg:h-[500px] "
            src={AboutImage}
            alt="loading"
          />
          <div className="absolute bottom-0 justify-end w-full h-full pt-48 font-cormantThiner">
            <div className="h-1 mb-3 ml-5 bg-white rounded-full max-sm:ml-3 max-sm:w-56 w-96"></div>
            <h2 className="text-[42px] uppercase text-white pl-5 max-sm:pl-3">
              Indddecore Interio <br /> Designer.
            </h2>
          </div>
        </div>
        {/* =============== =================== */}

        <section>
          <div className="flex gap-5 px-16 mb-5 max-md:flex-col max-md:px-6 ">
            <div className="w-[40%] max-md:w-full pt-16">
              <h2 className="uppercase font-cormantThiner">About company</h2>
              <h2 className="mt-10 font-extrabold text-[35px] font-cormantThiner">
                RECOGNIZED <br /> INTERIOR & EXTERIOR <br />
                <span className="font-medium text-[30px] text-red-600 uppercase">
                  Indddecore Interio
                </span>
              </h2>

              <div className="h-[1px] bg-black border-dotted w-[100%] mt-10"></div>

              <p className="mt-10 font-extrabold text-justify text-black font-cormantThiner">
                Diamond Interior was started in the year 20013, with a
                consistent aim to offer solutions related to interiors desiner
                for various purposes such as electrical, painting, furnishing
                and others. We are operating our entire business activities with
                our offices based in Delhi (India). Our company is a reliable
                and well-known service provider for services like Interior
                Designing Service, Modular Kitchen Designing, False Ceiling
                Service, Office Partition Designing, Painting Service and many
                more. Served to our valued clients with a commitment to keep all
                quality parameters as the major concern, our provided services
                can be availed at most competitive rates.
              </p>
            </div>
            <div className="w-[60%] Baner-black-white max-md:w-full h-[100%] pt-16 p-5 bg-gray-200 pb-28">
              <center>
                <img src={AboutImageTwo} alt="loading" />
              </center>
            </div>
          </div>
        </section>
      </section>

      {/* =============== Innovative ideas, stylish designs =================== */}
      <section>
        <div className="w-full h-full px-16 mt-16 mb-20 b-20 max-md:px-6">
          <div className="flex max-md:flex-col">
            <div className="w-[41%] max-md:w-full ">
              <img
                className="object-cover h-full Baner-black-white"
                src={AboutImageThree}
                alt="loading"
              />
            </div>
            <div className="w-[59%] max-md:w-full p-5 bg-gray-100">
              <h2 className="mb-3 italic font-cormantThiner">We can help you to</h2>
              <h2 className="text-[50px] font-extralight font-cormantThiner">
                Build your dream home
              </h2>
              <p className="mt-2 font-extrabold text-justify text-black font-cormantThiner">
                Our primary objective is to develop an imaginative answer for
                building interiors that will be an ideal harmony among
                aesthetics and functionality. Bizzoppo accentuates on
                administration straightforwardness and deliberate planning of
                all exercises to guarantee the fruitful fulfillment of all
                interior design ventures surpassing customer’s desires.
              </p>

              <button className="w-auto h-auto py-2 mt-5 bg-red-600 px-7">
                <span className="text-white text-[18px] uppercase">
                  Hire Us
                </span>
              </button>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-center text-[30px] italic text-red-600">
              Innovative ideas, stylish designs
            </h2>
            <h2 className="text-center text-[60px] uppercase font-cormantThiner font-semibold text-gray-600  mb-8">
              Get top professionals for you
            </h2>
            <div className="flex gap-10 font-extrabold text-justify text-black max-md:flex-col font-cormantThiner">
              <p className="w-[50%] max-md:w-full">
                Our Interior designers group represents considerable authority
                in making dynamic exceptional interiors for the elite group of
                residences and business foundations. Our designing specialists
                work with you on a one-on-one premise to make an unparalleled
                living encounter, regardless of whether your taste is customary
                or the present day. We at Bizzoppo are pleasured to convey rich
                and inventive arrangements that straightforwardly connect to our
              </p>
              <p className="w-[50%] max-md:w-full ">
                customer’s needs. Each venture begins with an idea and each idea
                is made from an exceptionally close to home association with our
                customers. We at Bizzoppo give first preference to our
                customers’ desires. With the help of our workforce and most
                recent innovations, we are amongst the best Interior Designers
                in Chennai and Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =============== Why To Choose Us? =================== */}
      <section>
        <div className="px-16 py-10 mb-10 bg-gray-200 max-md:px-6 ">
          <h2 className="italic text-[30px] text-center text-red-600">
            Designing the future
          </h2>
          <h2 className="mt-3 text-[50px] font-semibold text-center font-cormantThiner uppercase text-gray-600">
            Why To Choose Us?
          </h2>
          <center>
            <div className="h-1 mt-5 bg-red-600 rounded-full w-36"></div>
          </center>

          <section className="py-6 mt-5">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 sm:grid-cols-2">
                <Whychooseus
                  h2={<IoBagHandle />}
                  heading="21+ Years Experience"
                  para="We are in the industry for more than 21 years so we can deliver more experienced designs with users comfortable model."
                />

                <Whychooseus
                  h2={<FaPeopleCarry />}
                  heading="45 Days Delivery Guarantee"
                  para="Bizzoppo Interiors materials all are comes with 10 years of warranty. we have huge hope on our materials and service quality."
                />

                <Whychooseus
                  h2={<FaDoorOpen />}
                  heading="Own Factory Materials"
                  para="We are using own factory materials for all our interior designs because of that we are able to provide with low cost of services."
                />

                <Whychooseus
                  h2={<GiSevenPointedStar />}
                  heading="10+ Years Of Warranty"
                  para="Bizzoppo Interiors materials all are comes with 10 years of warranty. we have huge hope on our materials and service quality."
                />

                <Whychooseus
                  h2={<FaRegHandshake />}
                  heading="Lifetime Service Support"
                  para="We will support all our clients with lifetime service support to ensure that we have separate service team to work all over."
                />

                <Whychooseus
                  h2={<BsEmojiSmile />}
                  heading="2597+ Happy Customers"
                  para="We have finished more than 2569+ luxury villas and commercial projects. so our workers are very well organised team to deliver good models to you."
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* =============== Contact-us =================== */}
      <section>
        <div className="flex max-lg:flex-col  px-16 max-md:px-6 bg-[#28282B] py-10">
          <div className="w-[50%] max-md:text-center items-center max-lg:w-full max-md:mb-10">
            <h2 className="uppercase  text-[24px] text-red-500 italic">
              Contact Now
            </h2>
            <h2 className="mt-5 text-[50px] max-md:text-[30px] text-white font-semibold">
              For Any Inquiries Please Call
            </h2>
            <h2 className="mt-4 text-[25px] text-red-500">+91 866 722 3919</h2>

            <div className="w-48 h-[2px] mt-5 max-lg:w-full bg-white rounded-full"></div>

            <div className="w-full mt-10 max-sm:px-10">
              <ul className="flex w-full gap-5 max-sm:justify-between">
                <li className="w-10 h-10 pt-[8px]  bg-red-500 rounded-full">
                  <center>
                    <BiLogoFacebook className="text-[25px] text-white" />
                  </center>
                </li>
                <li className="w-10 h-10 pt-[8px]  bg-red-500 text-white rounded-full">
                  <center>
                    <AiOutlineTwitter className="text-[25px]" />
                  </center>
                </li>
                <li className="w-10 h-10 pt-[8px] bg-red-500 text-white rounded-full">
                  <center>
                    <AiOutlineInstagram className="text-[25px]" />
                  </center>
                </li>
                <li className="w-10 h-10 pt-[8px] bg-red-500 text-white rounded-full">
                  <center>
                    <BiLogoFacebook className="text-[25px]" />
                  </center>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="w-[100%] max-lg:mt-10 bg-red-500">
              {" "}
              <div className="lg:w-[600px] max-lg:w-full mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    title="Google Map of Coimbatore"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=coimbatore&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
                  ></iframe>
                  <a href="https://connectionsgame.org/">
                    Connections Unlimited
                  </a>
                </div>
                <style>
                  {`
      .mapouter {
        position: relative;
        text-align: right;
        height: 400px;
      }

      .gmap_canvas {
        overflow: hidden;
        background: none!important;
        width: 100%;
        height: 400px;
      }

      .gmap_iframe {
        width: 100%!important;
        height: 400px!important;
      }
    `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
