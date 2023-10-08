import { useEffect, useState } from "react";
import BookingEvent from "./bookingEvent";
import NoServiceFound from "./NoServiceFound";
import { Link } from "react-router-dom";

const Booking = () => {
  const [eventCard, setEventCard] = useState([]);
  const [noServiceFound, setNoServiceFound] = useState(false);
  const [isEventShow, setisEventShow] = useState(false);
  const [totalService, setTotalService] = useState(0);

  useEffect(() => {
    const eventItems = JSON.parse(localStorage.getItem("event"));

    if (eventItems) {
      setEventCard(eventItems);
      const total = eventItems.reduce(
        (preEvent, currentEvent) => preEvent + currentEvent.price,
        0
      );
      setTotalService(total);
    } else {
      setNoServiceFound(<NoServiceFound></NoServiceFound>);
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setEventCard([]);
    setNoServiceFound(<NoServiceFound></NoServiceFound>);
  };

  return (
    <div>
      {noServiceFound ? (
        <h1 className="h-[60vh] text-3xl font-semibold flex justify-center items-center">
          {noServiceFound}
        </h1>
      ) : (
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-20 py-4 my-9 ">
          {BookingEvent.length > 0 && (
            <div className="flex justify-between items-center w-full h-auto bg-amber-500 p-4 mt-2 mb-12 rounded-xl">
              <Link to={"/"}>
                <button className="btn text-white  normal-case font-semibold bg-red-500 hover:bg-black border-red-700 block ">
                  Back
                </button>
              </Link>

              <h2 className="text-2xl text-white font-semibold">
                Total Price: {totalService}$
              </h2>

              <button
                onClick={handleRemove}
                className="btn text-white  normal-case font-semibold bg-red-500 hover:bg-black border-red-700 block  "
              >
                Delete
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            {isEventShow
              ? eventCard.map((details) => (
                  <BookingEvent
                    key={details.id}
                    details={details}
                  ></BookingEvent>
                ))
              : eventCard
                  .slice(0, 4)
                  .map((details) => (
                    <BookingEvent
                      key={details.id}
                      details={details}
                    ></BookingEvent>
                  ))}
          </div>

          <div className="mt-8 text-center">
            {eventCard.length > 4 && (
              <button
                onClick={() => setisEventShow(!isEventShow)}
                className="btn text-white normal-case hover:bg-gray-900 font-semibold bg-amber-500"
              >
                {isEventShow ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
