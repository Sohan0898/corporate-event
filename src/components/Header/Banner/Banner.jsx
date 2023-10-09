import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div data-aos="zoom-up" data-aos-duration="2000" className=" mx-auto  mb-16 ">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh] "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/LnL0D6n/28945600-98y-8dnmspj5e9imsor55ko32.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay bg-gradient-to-b from-[#12121200]  to-[#121212] "></div>
            <div
              data-aos="zoom-in-up"
              className="hero-content text-center text-neutral-content"
            >
              <div className="">
                <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl text-white font-bold">
                  Where Business Meets <br />
                  <span className="text-amber-500">Celebration</span>
                </h1>
                <p className="mb-5">
                  Welcome to Corporate Connect – Your Premier Destination for
                  Exceptional Corporate Events! <br />
                  Join us in the world of business excellence, where we
                  transform ordinary gatherings into extraordinary experiences.
                </p>
                <div className="flex justify-center items-center gap-5 pt-3">
                  <Link to={'/register'}><button className="focus:outline-none text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-amber-600">
                    Register
                  </button></Link>
                  <Link to={'/contact'}><button className=" text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-amber-500 dark:text-amber-500 dark:hover:text-white dark:hover:bg-amber-500 dark:focus:ring-amber-600">
                    About Us
                  </button></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/THMxhCX/male-business-executive-giving-speech-1.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay bg-gradient-to-b from-[#12121200]  to-[#121212] "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl text-white font-bold">
                  Where Business Meets <br />
                  <span className="text-amber-500">Celebration</span>
                </h1>
                <p className="mb-5">
                  Welcome to Corporate Connect – Your Premier Destination for
                  Exceptional Corporate Events! <br />
                  Join us in the world of business excellence, where we
                  transform ordinary gatherings into extraordinary experiences.
                </p>
                <div className="flex justify-center items-center gap-5 pt-3">
                  <button className="focus:outline-none text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-amber-600">
                    Register
                  </button>
                  <button className=" text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-amber-500 dark:text-amber-500 dark:hover:text-white dark:hover:bg-amber-500 dark:focus:ring-amber-600">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh] "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/3cjC275/decorated-wedding-restaurant.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay bg-gradient-to-b from-[#12121200]  to-[#121212] "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5  text-xl md:text-3xl lg:text-5xl text-white font-bold">
                  Where Business Meets <br />
                  <span className="text-amber-500">Celebration</span>
                </h1>
                <p className="mb-5">
                  Welcome to Corporate Connect – Your Premier Destination for
                  Exceptional Corporate Events! <br />
                  Join us in the world of business excellence, where we
                  transform ordinary gatherings into extraordinary experiences.
                </p>
                <div className="flex justify-center items-center gap-5 pt-3">
                  <button className="focus:outline-none text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-amber-600">
                    Register
                  </button>
                  <button className=" text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-amber-500 dark:text-amber-500 dark:hover:text-white dark:hover:bg-amber-500 dark:focus:ring-amber-600">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh] "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/0jYRZsd/male-business-executive-giving-speech.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay bg-gradient-to-b from-[#12121200]  to-[#121212] "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5  text-xl md:text-3xl lg:text-5xl text-white font-bold">
                  Where Business Meets <br />
                  <span className="text-amber-500">Celebration</span>
                </h1>
                <p className="mb-5">
                  Welcome to Corporate Connect – Your Premier Destination for
                  Exceptional Corporate Events! <br />
                  Join us in the world of business excellence, where we
                  transform ordinary gatherings into extraordinary experiences.
                </p>
                <div className="flex justify-center items-center gap-5 pt-3">
                  <button className="focus:outline-none text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-amber-600">
                    Register
                  </button>
                  <button className=" text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-amber-500 dark:text-amber-500 dark:hover:text-white dark:hover:bg-amber-500 dark:focus:ring-amber-600">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
