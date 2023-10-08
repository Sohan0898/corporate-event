/* eslint-disable react/prop-types */

const BookingEvent = ({ details }) => {
  const { title, image, short_description, price } = details || {};

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className=" w-full h-[280px]" src={image} alt="" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl md:h-[65px] lg:h-auto font-bold">{title}</h2>
          <p className="text-gray-500 h-[45px]">{short_description}</p>
          <p className="font-semibold text-amber-500">Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default BookingEvent;
