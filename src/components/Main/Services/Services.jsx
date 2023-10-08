/* eslint-disable react/prop-types */
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = ({ cards }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-16 mb-12">
      <div className="flex justify-between rounded-xl bg-gray-900 p-5 mb-16">
        <h1 className="text-4xl  font-bold text-white">
          Browse our <span className="text-amber-500">Services</span>
        </h1>
        <button className="btn  text-lg bg-amber-500 capitalize font-bold">
          Explore All Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center item-center  gap-10">
        {cards?.map((card) => (
          <ServicesCard key={card.id} card={card}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
