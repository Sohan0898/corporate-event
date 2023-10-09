import Member from "./Member";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-8 py-2">
      <div className="hero h-auto bg-base-100">
        <div className="hero-content flex-col-reverse  lg:flex-row">
          <div className="w-3/6 flex gap-4 justify-center items-center ">
            <img 
              className="  lg:w-3/6 rounded-xl shadow-md lg:shadow-gray-400"
              src="https://i.ibb.co/XpCw22h/exquisite-decoration-wedding-restaurant.jpg"
            />

            <img
              className="lg:w-3/6 rounded-xl shadow-md lg:shadow-gray-400 lg:relative lg:-left-16 lg:top-16 "
              src="https://i.ibb.co/37wpGGY/trade-fair-as-people-gather-lively-international-pavilion-ai-generated-899027-8064.jpg"
            />
          </div>
          <div className="lg:w-3/6">
            <h1 className="text-4xl text-center lg:text-start lg:text-6xl font-bold">
              About <br />
              <span className="text-amber-500"> Corporate Events</span>
            </h1>
            <p className="py-6">
              Corporate events are gatherings organized by businesses and
              corporations for various purposes, typically related to their
              professional activities and objectives. These events play a
              significant role in corporate culture, fostering teamwork,
              communication, and achieving specific goals.{" "}
            </p>
            <div className="text-center lg:text-start">
            <button className="focus:outline-none text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-amber-600">
              Explore More
            </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 mt-12 lg:mt-36" ><div className="w-full stats shadow-md ">
        <div className="stat place-items-center">
          <div className="stat-title">Monthly visitors</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div></div>

      <div className="bg-base-100 my-8">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-16 ">
        <div  className="text-center pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold ">Meet the team behind <span className="text-amber-500">Corporate Event</span></h1>
          <br />
          <p>
            In the world of corporate events, success often hinges on the expertise and dedication of a talented team. Meet the professionals who bring your corporate gatherings to life, from event planners and coordinators to marketing strategists and creative designers. With their collective skills and passion, they turn your vision into memorable and impactful experiences, ensuring every detail is meticulously planned and executed. Get to know the faces behind the scenes, driving innovation and excellence in the realm of corporate event planning.
          </p>
        </div>

        <div  >
        <Member></Member>
        </div>

      </div>
    </div>

    </div>
  );
};

export default Contact;
