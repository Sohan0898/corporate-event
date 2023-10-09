const Faq = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-4 py-2">
      <div className="text-center pt-20 pb-16 w-3/4 mx-auto">
        <h1 className="text-5xl font-bold ">Frequently asked questions</h1>
        <br />
        <p className="text-sm text-gray-400">
          This FAQ highlights trends like technology integration, sustainability
          initiatives, personalized attendee experiences, interactive content,
          and enhanced focus on health and safety. Understand these trends to
          create modern and engaging corporate events.
        </p>
      </div>
      <div className="px-4">
        <div className="collapse collapse-plus bg-base-200 mt-5 shadow-md">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl  font-semibold">
            What is the purpose of a corporate event?
          </div>
          <div className="collapse-content">
            <p className="text-sm text-gray-400">
              Corporate events serve various purposes, such as networking, team
              building, product launches, training, and celebrating company
              milestones. They are designed to achieve specific business
              objectives and enhance corporate culture.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-5 shadow-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            How do I choose the right venue for a corporate event?
          </div>
          <div className="collapse-content">
            <p className="text-sm text-gray-400">
              Selecting the right venue depends on factors like the events
              size, location, budget, and theme. Consider the accessibility for
              attendees, technological requirements, and the ambiance that
              aligns with your events goals.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-5 shadow-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            What are the key components of event planning?
          </div>
          <div className="collapse-content">
            <p className="text-sm text-gray-400">
              Event planning involves multiple elements, including venue
              selection, catering, logistics, marketing, registration, content
              creation, and budget management. Attention to detail is crucial to
              ensure a successful event.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-5 shadow-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            How can I measure the success of a corporate event?
          </div>
          <div className="collapse-content">
            <p className="text-sm text-gray-400">
              Success can be measured through various metrics, such as attendee
              satisfaction surveys, lead generation, revenue generated, social
              media engagement, and ROI (Return on Investment) analysis. The
              choice of metrics depends on your event goals.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-5 shadow-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            What are some trends in corporate events today?
          </div>
          <div className="collapse-content">
            <p className="text-sm text-gray-400">
              Current trends in corporate events include the integration of
              technology (virtual and hybrid events), sustainability
              initiatives, personalized experiences, interactive content, and a
              focus on attendee well-being and safety, especially in light of
              health concerns.
            </p>
          </div>
        </div>
      </div>


<div className="text-center mx-auto mt-20 px-4">
    <h3 className="text-2xl font-semibold"><span className="text-amber-500">Have more questions? </span>Get in touch with us</h3>
    <p className="pt-3">
    If you can’t find the answer you are looking for, please dont <br /> hesitate to <button className="text-amber-500 font-medium " >contact us</button>.
    </p>
    </div>
      <div className="flex justify-center mx-auto mt-8 gap-4 mb-20 px-4"  >
      

        <textarea
          className="textarea w-3/4 textarea-warning"
          placeholder="Ask me anything..."
        ></textarea>
        <button className="focus:outline-none text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:ring-amber-500 font-medium rounded-lg text-sm px-8 py-4 mr-2 mb-2 dark:focus:ring-amber-600" >Submit</button>
      </div>
    </div>
  );
};

export default Faq;
