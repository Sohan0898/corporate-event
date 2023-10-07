/* eslint-disable react/no-unescaped-entities */


const ReviewsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pb-16  justify-center item-center  gap-10">
            <div className="relative grid md:h-[450px] lg:h-[400px] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-base-200 bg-clip-border border-4 border-amber-700  text-center ">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none">
    
  </div>
  <div className="relative p-6  px-6 md:px-12">
    <div>
    <div className="rating rating-md gap-2">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
</div>
    </div>
    <p className="md:h-[200px] lg:h-[180px] pt-3 text-gray-600   ">
    Attended the Trade Show last week, and it was fantastic! Got to see the latest tech innovations and networked with industry experts. A must for anyone in tech. Can't wait for next years event!
    </p>
    <h2 className="text-xl pt-3 font-bold text-black">
    John Smith
    </h2>
    <h5 className="mb-4 block font-sans text-sm  leading-snug tracking-normal text-gray-400 antialiased">
    123 Main Street, Anytown, USA
    </h5>
    <img
      alt="tania andrew"
      src="https://i.ibb.co/T0667hd/63dabe528a767220c3c58667-john-carter-testimonial-avatar-directory-webflow-ecommerce-template.jpg"
      className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
    />
  </div>
</div>

<div className="relative grid md:h-[450px] lg:h-[400px] w-full   flex-col items-end justify-center overflow-hidden rounded-xl bg-base-200 bg-clip-border border-4 border-amber-700  text-center ">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none">
    
  </div>
  <div className="relative p-6  px-6 md:px-12">
    <div>
    <div className="rating rating-md gap-2">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500"  />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" checked/>
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
</div>
    </div>
    <p className="md:h-[200px] lg:h-[180px] pt-3 text-gray-600   ">
    I recently participated in a Team Building Workshop with my colleagues. It was an incredible experience. We learned to communicate better, solved challenging tasks, and bonded like never before. Highly recommend it!
    </p>
    <h2 className="text-xl pt-3 font-bold text-black">
    Andy Smith
    </h2>
    <h5 className="mb-4 block font-sans text-sm  leading-snug tracking-normal text-gray-400 antialiased">
    456 Elm Avenue, Cityville, USA
    </h5>
    <img
      alt=""
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
    />
  </div>
</div>

<div className="relative grid md:h-[450px] lg:h-[400px] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-base-200 bg-clip-border border-4 border-amber-700  text-center ">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none">
    
  </div>
  <div className="relative p-6  px-6 md:px-12">
    <div>
    <div className="rating rating-md gap-2">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500"  />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" checked/>
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-amber-500" />
</div>
    </div>
    <p className="md:h-[200px] lg:h-[180px] pt-3 text-gray-600   ">
    The Product Launch event I attended was mind-blowing! The unveiling of the latest gadgets left me in awe. Kudos to the organizing team for such a spectacular show. It was worth every mile I traveled.
    </p>
    <h2 className="text-xl pt-3 font-bold text-black">
    Robert Brown
    </h2>
    <h5 className="mb-4 block font-sans text-sm  leading-snug tracking-normal text-gray-400 antialiased">
    789 Oak Lane, Suburbia, USA
    </h5>
    <img
      alt=""
      src="https://i.ibb.co/h1Mv85D/63dabe5317b653486c543cbb-andy-smith-testimonial-avatar-directory-webflow-ecommerce-template.jpg"
      className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
    />
  </div>
</div>
        </div>
    );
};

export default ReviewsCard;