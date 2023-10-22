import { BsArrowRight } from "react-icons/bs";

import BannerimageOne from "../assets/images/home/Bannerimages/Imageone.jpg";
import BannerimageTwo from "../assets/images/home/Bannerimages/ImageTwo.jpg";
import BannerimageThree from "../assets/images/home/Bannerimages/Image-three.jpg";
import BannerimageFour from "../assets/images/home/Bannerimages/Image-four.jpg";
import BannerimageFive from "../assets/images/home/Bannerimages/Image-five.jpg";
import BannerimageSix from "../assets/images/home/Bannerimages/image-seven.jpg";

import ImageThree from "../assets/images/gallary/18-min.jpg";

import ProjectimgOne from "../assets/images/home/project-images/Bedazzeled.jpg";
import ProjectimgTwo from "../assets/images/home/project-images/Man-Cave_006-optimized.jpg";
import ProjectimgThree from "../assets/images/home/project-images/TLenz_RaeDuncan.jpg";
import ProjectimgFour from "../assets/images/home/project-images/one.jpg";
import ProjectimgFive from "../assets/images/home/project-images/project-image-one.jpg";
import ProjectimgSix from "../assets/images/home/project-images/two.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

// import Map from "../components/Map/map";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import BeforFooterImage from "../assets/images/home/lastBeforeImage.jpg";

import ProcessImageone from "../assets/images/home/ServicesImages/commercials-interior-designers-in-chennai-peril.png";
import ProcessImageTwo from "../assets/images/gallary/17-min.jpg";
import ProcessImageThree from "../assets/images/home/ServicesImages/office-interiors-in-chennai-peril.png";

import DreamImage from "../assets/images/gallary/15-min.jpg";

import Why from "../assets/images/gallary/6-min.jpg";
import { FaPaintBrush } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
const Homepage = () => {
  const setingOne = {
    dots: true,
    horizontal: false,
    vertical: true,
    autoplay: true,
    infinite: true,

    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrowOne />,
    nextArrow: <NextArrowOne />,
  };

  function PrevArrowOne(props) {
    return <div className="hidden"></div>;
  }

  function NextArrowOne(props) {
    return <div className="hidden"></div>;
  }
  const settings = {
    // dots: true,

    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute  flex h-auto pt-1 top-[18.4rem] max-md:top-5 -left-7 max-sm:left-0">
        <button onClick={onClick}>
          <h2 className="">
            <MdArrowBackIosNew className="text-black text-[30px]" />
          </h2>
        </button>
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="absolute  max-md:top-5 flex h-auto pt-1 top-[18.4rem]   max-md:left-10 -right-7"
        style={{ ...style }}
      >
        <button onClick={onClick}>
          <h2 className="">
            <MdArrowForwardIos className="text-black text-[30px]" />
          </h2>
        </button>
      </div>
    );
  }
  return (
    <>
      <section>
        <section>
          <div className="mb-20 bg-white">
            <div className="relative ">
              <Slider {...setingOne} className="Baner-black-white">
                <div className="image-container ">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover "
                    src={BannerimageThree}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageOne}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageTwo}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageFour}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageFive}
                    alt="loading"
                  />
                </div>

                <div className="image-container">
                  <img
                    className="zoom-in-zoom-out max-sm:h-[300px] max-sm:object-cover"
                    src={BannerimageSix}
                    alt="loading"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>

        {/* ============================= World-Class Luxury Interior Designer ========== */}
        <section>
          <div className="px-16 mb-10 max-sm:px-4">
            <p className="font-cormantThiner max-sm:text-[32px] text-gray-700 text-[50px] text-center ">
              World-Class Luxury Interior Designer
            </p>
            <p className="mt-5 text-center px-36 font-cormantThiner max-lg:px-14 max-md:px-10 max-sm:px-1">
              Rae Duncan Interior Design is a full-service luxury international
              design firm specializing in both residential and commercial spaces
              with a focus on branded environments. We collaborate on every
              project to elevate raw concepts and ideas into unique spaces that
              are both thoughtful and exquisite.
            </p>
            <center>
              <div className="lg:w-[20%] md:w-[40%] max-md:w-[40%]  bg-red-600  mt-10 flex justify-evenly text-[20px] pt-2 pb-2">
                <button className="text-white uppercase font-cormantThiner ">
                  Talk to Us
                </button>
                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </center>
          </div>
        </section>

        {/* ================== MEET KERALA'S BEST INTERIOR DESIGNERS ================ */}

        <section>
          <div className="pt-10 pb-1 bg-gray-200">
            <div className="">
              <h1 className="text-center max-md:text-[50px] text-gray-500 font-bold uppercase text-[45px] font-cormantThiner ">
                About <span className="text-red-600"> Inddecore Interio </span>
              </h1>
              <center>
                <div className="h-1 bg-red-600 rounded-full w-96 max-md:hidden"></div>
              </center>
            </div>
            <div className="flex w-full h-auto px-20 mt-20 mb-20 max-md:px-6 max-lg:flex-col ">
              <div className="w-[50%] max-lg:w-full h-[500px] Baner-black-white">
                <img
                  className="object-cover w-full h-full"
                  src={ImageThree}
                  alt="loading"
                />
              </div>

              <div className="w-[50%] max-lg:w-full  h-auto ">
                <div className="h-[30%] text-center pt-5">
                  <h1 className="text-center text-gray-500 font-bold uppercase text-[45px] font-cormantThiner ">
                    <span className="text-red-600"> Inddecore </span>Interio
                  </h1>
                </div>

                <div className="w-full h-[70%] px-16 py-16 max-sm:px-6 bg-white ">
                  <h2 className="uppercase tracking-widest text-[22px] text-gray-500">
                    MEET KERALA'S BEST
                  </h2>
                  <p className="text-[32px] tracking-wider font-medium text-red-600">
                    INTERIOR DESIGNERS
                  </p>
                  <p className="text-justify font-extrabold text-[16px] text-gray-800  font-cormantThiner">
                    stablished in the year 2018, THOMAR is a highly reputed
                    interior brand. It is supported by a powerful team of
                    architects, interior designers and supervisors etc. This
                    widely acclaimed brand, which offers turnkey interior
                    solutions, is known for its exceptional research and
                    development wing. It handles both residential and commercial
                    projects. It maintains international standards in design,
                    material, as well as execution..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= Services section ===================*/}

        <section>
          <div className="flex gap-5 mt-20 px-11 max-md:px-6 max-lg:flex-col">
            <div className="relative z-0 Baner-black-white">
              <img
                className="object-cover z-[1] w-auto h-[500px] rounded-xl"
                src={ProcessImageTwo}
                alt="loading"
              />
              <div className="absolute top-0 w-full h-full bg-black rounded-xl opacity-40"></div>
              <div className="absolute bottom-0 px-10 pb-10">
                <h2 className="font-cormantThiner text-[40px] font-semibold text-white">
                  Residential Interiors
                </h2>
                <p className="text-white font-cormantThiner">
                  Get the Best Residential Interior Designers in Chennai. Check
                  Our Latest Works Here.
                </p>
              </div>
            </div>

            <div className="relative Baner-black-white">
              <img
                className="rounded-xl h-[500px] object-cover w-full"
                src={ProcessImageThree}
                alt="loading"
              />

              <div className="absolute top-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <div className="absolute bottom-0 px-10 pb-10">
                <h2 className="font-cormantThiner text-[40px] font-semibold text-white">
                  Corporate Interiors
                </h2>
                <p className="text-white font-cormantThiner">
                  Get the Best Residential Interior Designers in Chennai. Check
                  Our Latest Works Here.
                </p>
              </div>
            </div>

            <div className="relative Baner-black-white">
              <img
                className="rounded-xl  h-[500px] object-cover w-full"
                src={ProcessImageone}
                alt="loading"
              />
              <div className="absolute top-0 w-full h-full bg-black rounded-xl opacity-40"></div>
              <div className="absolute bottom-0 px-10 pb-10">
                <h2 className="font-cormantThiner text-[40px] font-semibold text-white">
                  Commercial Interiors
                </h2>
                <p className="text-white font-cormantThiner">
                  Get the Best Residential Interior Designers in Chennai. Check
                  Our Latest Works Here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== Dream  ================================== */}
        <section>
          <div className="flex gap-5 px-16 mt-20 max-md:px-6 max-lg:flex-col">
            <div className="w-[40%] max-lg:w-full">
              <ul className="flex">
                <li className="pt-3 pr-3">
                  <div className="h-[2px] w-[70px] bg-red-600"></div>
                </li>
                <li>
                  <h2 className=" font-cormantThiner">
                    ENHANCE YOU LIVING EXPERIENCE
                  </h2>
                </li>
              </ul>

              <h2 className="text-[35px] uppercase font-extrabold font-cormantThiner ">
                Your <span className="text-red-600">Dream Home Awaits </span> .
                Let's Design It Together.
              </h2>
              <p className="mt-5 text-justify text-[18px] text-black font-extrabold font-cormantThiner">
                With over 19 years of industry experience, Peril Interior
                Designer has built a solid reputation for excellence. Our team
                of certified interior designers possesses the necessary
                qualifications and skills to transform your space. Their
                expertise, combined with their passion for design, allows them
                to create functional and visually stunning interiors that align
                with your lifestyle and preferences.
              </p>
              <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-red-600  mt-10 flex justify-evenly">
                <button className="text-white uppercase font-cormantThiner">
                  Contact Us
                </button>
                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </div>
            <div className="w-[60%] max-lg:w-full  rounded-xl  Baner-black-white">
              <img
                className="object-cover h-full shadow-inner rounded-xl shadow-black"
                src={DreamImage}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* ================================================== Process  ================================== */}
        <section>
          <div className="px-16 py-20 mt-16 max-sm:px-5 bg-gray-50">
            <center className="flex mb-16 justify-evenly">
              <div className="w-80  h-[2px]  mt-6 bg-red-600"> </div>{" "}
              <h2 className="text-[35px] max-sm:text-18px font-cormantThiner font-bold">
                Our <span className="text-red-600">Designing </span> Process
              </h2>
              <div className="w-80 mr-5 h-[2px]  mt-6 bg-red-600"> </div>
            </center>
            <ul className="flex h-auto gap-10 font-extrabold text-black max-lg:flex-col">
              <li>
                <div className="hover:border-[1px] shadow-lg hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <FaPaintBrush className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>
                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      Discover
                    </h2>
                    <p className="font-cormantThiner text-[18px]">
                      Meet Our Designer and Explore Designs
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="hover:border-[1px] shadow-lg hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <FaGears className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>
                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      Customize
                    </h2>
                    <p className="font-cormantThiner text-[18px] px-3">
                      Co-create customized design and get a quote{" "}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="hover:border-[1px] hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all shadow-lg duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <AiFillHome className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>

                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      Place Your Order
                    </h2>
                    <p className="font-cormantThiner text-[18px]">
                      After finalization design quote,v place you order{" "}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="hover:border-[1px]  shadow-lg hover:-translate-y-7 hover:border-red-600 py-10 hover:shadow-xl rounded-lg transition-all duration-[1s] ease-in-out hover:shadow-gray-500">
                  <center>
                    <div class="w-20 h-20 border-red-500 border-[3px] rounded-full">
                      <FaTruck className="text-red-600 text-[25px] mt-6" />
                    </div>
                  </center>

                  <div className="text-center">
                    <h2 className="text-[25px] font-cormorant font-bold">
                      MoveIn
                    </h2>
                    <p className="font-cormantThiner text-[18px]">
                      Move in to your newly furnished within 45-60 days{" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* ================================================== Why choose  ================================== */}
        <section>
          <div className="flex gap-5 px-16 mt-20 max-md:px-6 max-lg:flex-col">
            <div className="w-[40%] max-lg:w-full">
              <ul className="flex">
                <li className="pt-3 pr-3">
                  <div className="h-[2px] w-[70px] bg-red-600"></div>
                </li>
                <li>
                  <h2 className=" font-cormantThiner">
                    ENHANCE YOU LIVING EXPERIENCE
                  </h2>
                </li>
              </ul>

              <h2 className="text-[32px] mb-2 mt-2 uppercase font-extrabold font-cormantThiner ">
                Why Choose Us <span className="text-red-600"> Indo Decor</span>{" "}
                Interior Designer
              </h2>
              <div className="pl-5">
                <ul className="text-[18px] text-black font-extrabold font-cormantThiner list-disc">
                  <li>No.1 Quality material and Finishing</li>
                  <li>Upto 10 Years Material Warranty</li>
                  <li>Project Delivery within 45 Days</li>
                  <li>Get Free Consultations with Design Experts</li>
                  <li>Innovative and mesmerizing</li>
                  <li>20+ Years of Industry Experienced</li>
                  <li>Certified Interior Designers</li>
                  <li>Quality in Affordable Pricing</li>
                </ul>
              </div>
              <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-red-600  mt-10 flex justify-evenly ">
                <button className="text-white uppercase font-cormantThiner">
                  Contact Us
                </button>
                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </div>
            <div className="w-[60%] max-lg:w-full  rounded-xl  Baner-black-white">
              <img
                className="object-cover h-full shadow-inner rounded-xl shadow-black"
                src={Why}
                alt="loading"
              />
            </div>
          </div>
        </section>
        {/* ==================================================================================== */}

        {/* ==========================  OUR PROJECTS ===================*/}

        <section className="py-6 pt-10">
          <div>
            <h2 className="text-center font-semibold text-[32px] font-cormantThiner tracking-wider">
              RECENT <span className="text-red-600"> PROJECTS </span>
            </h2>
          </div>
          <div className="container flex flex-col justify-center p-4 mx-auto font-extrabold text-black">
            <div className="grid grid-cols-1 gap-4 px-16 max-sm:px-6 lg:grid-cols-3 sm:grid-cols-2 justify-evenly">
              <div className="Baner-black-white">
                <img src={ProjectimgOne} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Bedazzled
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgTwo} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Ultimate Mancave
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgThree} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Lavish Loft
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgFour} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Style King
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgFive} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Crowd Pleaser
                </h2>
              </div>

              <div className="Baner-black-white">
                <img src={ProjectimgSix} alt="loading" />
                <h2 className="text-center font-cormantThiner mt-5 text-[23px]">
                  Liberace
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* ============= Small Content ==============*/}

        <section>
          <div className="px-16 py-10 mt-10 max-sm:px-6 max-sm:mt-0 ">
            <div>
              <p className="font-cormantThiner  text-black font-extrabold text-[35px] text-center max-md:text-[30px]">
                An <span className="text-red-600"> Inddecore </span> interior is
                characterized by its distinction, unparalleled attention to
                detail, and luxury that you can indulge in daily.
              </p>
              <center>
                <div className="lg:w-[24%] max-sm:w-full md:w-[40%] max-md:w-[40%]  bg-red-600  mt-10 flex justify-evenly text-[20px] pt-2 pb-2">
                  <button className="text-white font-cormantThiner ">
                    SEE ALL PROJECTS
                  </button>
                  <BsArrowRight className="font-bold text-[35px] text-white " />
                </div>
              </center>
            </div>
          </div>
        </section>
        {/* ==================================================  ================================== */}
        <section>
          <div className="flex gap-5 px-16 py-20 mt-20 bg-gray-100 max-sm:px-6 max-lg:flex-col">
            <div className="w-[40%] max-lg:w-full">
              <ul className="flex">
                <li className="pt-3 pr-3">
                  <div className="h-[2px] w-[70px] bg-red-600"></div>
                </li>
                <li>
                  <h2 className=" font-cormantThiner">
                    ENHANCE YOU LIVING EXPERIENCE
                  </h2>
                </li>
              </ul>

              <h2 className="text-[42px] font-extrabold font-cormantThiner ">
                Our Achievements
              </h2>
              <p className="mt-5 text-justify text-black font-extrabold text-[18px] font-cormantThiner">
                We keep promises and deliver on-time as per commitments. Every
                project we undertake is unique and we bring holistic
                satisfaction to our esteemed clients. Our maximum is to create
                captivating interior design experiences for home and workplace
                that are unique, elegant, made of superior quality and full of
                luxury.
              </p>
              <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-red-600  mt-10 flex justify-evenly">
                <button className="text-white uppercase font-cormantThiner">
                  Contact Us
                </button>
                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </div>

            <div className="w-[60%] pt-24 max-lg:w-full rounded-xl  ">
              <ul className="flex justify-evenly ">
                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>3,726</span>{" "}
                      <span className="text-red-600 text-[25px] ml-3">+</span>{" "}
                    </h2>
                    <h2 className="font-semibold text-red-600">
                      Finished Projects
                    </h2>
                  </div>
                </li>

                <li className="pt-10">
                  <div className="h-[30px] w-[2px] bg-gray-400"></div>
                </li>

                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>69</span>{" "}
                      <span className="text-red-600 text-[25px] ml-3">+</span>{" "}
                    </h2>
                    <h2 className="font-semibold text-red-600">
                      On Going Projects
                    </h2>
                  </div>
                </li>

                <li className="pt-10">
                  <div className="h-[30px] w-[2px] bg-gray-400"></div>
                </li>

                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>150</span>{" "}
                      <span className="text-red-600 text-[25px] ml-3">+</span>{" "}
                    </h2>
                    <h2 className="font-semibold text-red-600">Awards</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ======================= testimonial ==================================== */}
        <section>
          <div className="px-10 pb-10 max-sm:px-1">
            <div>
              <h2 className="text-center text-[32px] font-cormantThiner uppercase text-red-600 pt-10 ">
                WHAT OUR CLIENT SAYS
              </h2>
            </div>
            <div>
              <Slider className="" {...settings}>
                <center className="px-7">
                  <ul className="flex w-[80%] max-md:w-full gap-5 shadow-xl pb-10 pt-10 shadow-gray-500 max-sm:shadow-lg max-lg:flex-col mb-10 mt-20 justify-evenly ">
                    <li>
                      <div className="w-auto h-auto">
                        <div className="px-5 pt-28 max-sm:px-0 max-md:pt-20">
                          <p className="font-cormantThiner">21-9-2023</p>
                          <p className="font-semibold font-cormantThiner text-[25px]">
                            Danial
                          </p>

                          <ul className="flex justify-center ">
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="w-[70%] pr-20 max-lg:px-10 max-lg:w-full">
                      <div className="w-[100%]">
                        <p>
                          <BiSolidQuoteLeft className="text-[102px] text-[#c7993d]" />
                        </p>
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner text-justify">
                          Indo decor is a luxury interior designer who’s
                          passionate about creating environments that reflect
                          the unique personalities of her clients. She founded
                          RDID to bring her bold, eclectic tastes and a high
                          level of sophistication to Chicago interior design’s
                          luxury residential and commercial markets. An adept
                          curator of branded environments, Rae specializes in
                          ensuring RDID’s commercial design work is flawlessly
                          integrated and reflects the branding and culture of
                          her clients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>

                <center className="px-7">
                  <ul className="flex w-[80%] max-md:w-full gap-5 shadow-xl pb-10 pt-10 shadow-gray-500 max-sm:shadow-lg max-lg:flex-col mb-10 mt-20 justify-evenly ">
                    <li>
                      <div className="w-auto h-auto">
                        <div className="px-5 pt-28 max-sm:px-0 max-md:pt-20">
                          <p className="font-cormantThiner">21-9-2023</p>
                          <p className="font-semibold font-cormantThiner text-[25px]">
                            Danial
                          </p>

                          <ul className="flex justify-center ">
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-[#daa844] text-[30px]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="w-[70%] pr-20 max-lg:px-10 max-lg:w-full">
                      <div className="w-[100%]">
                        <p>
                          <BiSolidQuoteLeft className="text-[102px] text-[#c7993d]" />
                        </p>
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner text-justify">
                          Indo decor is a luxury interior designer who’s
                          passionate about creating environments that reflect
                          the unique personalities of her clients. She founded
                          RDID to bring her bold, eclectic tastes and a high
                          level of sophistication to Chicago interior design’s
                          luxury residential and commercial markets. An adept
                          curator of branded environments, Rae specializes in
                          ensuring RDID’s commercial design work is flawlessly
                          integrated and reflects the branding and culture of
                          her clients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>
              </Slider>
            </div>
          </div>
        </section>
        {/* ===================================== */}
        {/* <Map /> */}

        {/* ======================================== */}
        <section>
          <div className="relative w-full h-auto ">
            <img
              className="object-cover object-bottom h-[300px] w-full max-md:h-[500px]"
              src={BeforFooterImage}
              alt="loading"
            />
            <div className="absolute top-0 w-full h-[100%] bg-blue-900 opacity-70"></div>
            <div className="absolute top-0 h-[100%] w-full">
              <p className="pl-48  max-sm:px-4 max-lg:pl-5 pt-10 font-semibold  text-white font-cormantThiner text-[35px]">
                Want to find out more about how we can help? <br /> Have a
                project you’d like us to look at and want an idea of cost?
              </p>
              <p className="pl-48 mt-5 text-white max-sm:px-4 max-lg:pl-5 font-cormantThiner">
                GIVE US A CALL OR DROP US AN EMAIL AND WE’LL GET BACK TO YOU AS
                SOON AS WE CAN.
              </p>
              <div className="pl-48 mt-5 text-white max-lg:pl-5 font-cormantThiner ">
                <ul className="flex text-[18px] max-md:flex-col ">
                  <li className="flex pr-20 ">
                    <p className="pr-5 mt-1">
                      <BsFillTelephoneFill />
                    </p>
                    <span> +91 9744775778</span>
                  </li>
                  <li className="flex ">
                    <p>
                      <BiLogoGmail className="mt-1 mr-5" />
                    </p>
                    <span>contact@thomarinteriors.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Homepage;
