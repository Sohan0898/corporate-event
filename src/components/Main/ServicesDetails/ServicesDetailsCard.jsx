/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const ServicesDetailsCard = ({details}) => {

    const {
      id,
        title,
        image,
        description,
        price
      } = details|| {};


      const handleBookEvent = () => {
        const addedBookEvent = [];
        const services = JSON.parse(localStorage.getItem("event"));
    
        if (!services) {
          addedBookEvent.push(details);
          localStorage.setItem("event", JSON.stringify(addedBookEvent));
          toast.success("You Purchase Service Successfully!");
        } else {
          const isExits = services.find((details) => details.id == id);
          if (!isExits) {
            addedBookEvent.push(...services, details);
            localStorage.setItem("event", JSON.stringify(addedBookEvent));
            toast.success("You Purchase Service Successfully!");
          } else {
            toast.warn("You Already Purchase Service!");
          }
        }
      };
    





    return (
        <div>

<div className="bg-base-200 py-3 max-w-xs rounded-xl mx-auto mb-16">
            <h1 className=" text-center text-amber-500 text-4xl font-bold">Our Services</h1>
          </div>

            <div className="relative  md:flex md:w-full  md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0  md:w-2/5  shrink-0 overflow-hidden rounded-xl  md:rounded-r-none bg-white bg-clip-border">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold leading-relaxed  tracking-normal text-amber-500 antialiased">
      Price: {price}$
    </h6>
    <h4 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-500 antialiased">{description}
    </p>
    <div>
        <div className="flex items-center   gap-2">
        <h1 className="text-3xl font-bold ">Rating us:</h1>
    <div className="rating">
        
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-500" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-500" />
</div>
        </div>
    </div>
  </div>
</div>
<div className="flex justify-center items-center gap-4  mt-12">
    <button onClick={handleBookEvent} className="btn bg-amber-500 capitalize text-white  text-xl">Book Events</button>
    <Link to={'/'}><button className="btn bg-gray-900 capitalize text-white  text-xl">Go Home</button></Link>
</div>
        </div>
    );
};

export default ServicesDetailsCard;

