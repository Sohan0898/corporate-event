/* eslint-disable react/no-unescaped-entities */
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  return (
    <div className="bg-base-100">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-16 ">
        <div className="text-center pt-20 pb-16">
          <h1 className="text-5xl font-bold ">What Our Users Say</h1>
          <br />
          <p>
            User feedback is glowing! <br /> It's evident that our product is
            making a real impact.
          </p>
        </div>

        <div className="">
          <ReviewsCard></ReviewsCard>
        </div>

        <div className="text-center pb-20">
          <button className="btn bg-gray-900 capitalize text-lg text-white">
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
