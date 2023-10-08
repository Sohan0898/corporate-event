/* eslint-disable react/no-unescaped-entities */

const EventManage = () => {
  return (
    <div>
      <div className="  hero py-28 bg-base-200">
        <div className="hero-content max-w-screen-2xl gap-10  mx-auto px-2 md:px-6 lg:px-16 flex-col-reverse lg:flex-row-reverse ">
          <div className="w-3/6 ">
            <div className="pb-5">
              <h2>Conferences and Seminars</h2>
              <progress
                className="progress progress-warning w-full"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="pb-5">
              <h2>Trade Shows and Expos</h2>
              <progress
                className="progress progress-warning w-full"
                value="40"
                max="100"
              ></progress>
            </div>
            <div className="pb-5">
              <h2>Team Building Workshops</h2>
              <progress
                className="progress progress-warning w-full"
                value="50"
                max="100"
              ></progress>
            </div>

            <div className="pb-5">
              <h2>Product Launches</h2>
              <progress
                className="progress progress-warning w-full"
                value="40"
                max="100"
              ></progress>
            </div>
            <div className="pb-5">
              <h2>Corporate Meetings</h2>
              <progress
                className="progress progress-warning w-full"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <h2>Award Ceremonies</h2>
              <progress
                className="progress progress-warning  w-full"
                value="30"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="w-3/6  ">
            <h1 className="text-5xl font-bold">
              <span className="text-amber-500">Events</span> Manage!
            </h1>
            <p className="py-6">
              Corporate events management involves the planning, coordination,
              and execution of various gatherings and activities organized by a
              business or corporation for its employees, clients, stakeholders,
              or partners. These events can range from small meetings and
              conferences to large-scale celebrations and expos. The primary
              goal of corporate events management is to create memorable and
              impactful experiences that align with the company's objectives and
              enhance its reputation.
            </p>
            <p className="py-6">
              Corporate events management can be divided into two main
              categories:{" "}
              <span className="text-amber-500">Corporate Meetings</span> and{" "}
              <span className="text-amber-500">Award Ceremonies</span>.
            </p>
            <button className="btn bg-amber-500 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManage;
