/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServicesCard = ({card}) => {

  const {
    id,
    title,
    image,
    short_description,
    price
  } = card || {};

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className=" w-full h-[280px]" src={image} alt="" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl md:h-[65px] lg:h-auto font-bold">{title}</h2>
    <p className="text-gray-500 h-[45px]">{short_description}</p>
    <p className="font-semibold text-amber-500">Price: {price}$</p>
    <div className="">
      <Link to={`/cardDetails/${id}`}><button  className="btn bg-gradient-to-r from-amber-300 to-amber-500  capitalize text-xl font-bold text-white w-full">See Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;
