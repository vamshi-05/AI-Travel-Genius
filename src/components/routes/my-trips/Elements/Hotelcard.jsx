import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { LogInContext } from "@/Context/LogInContext/Login";
import HotelCards from "../Cards/HotelCards";
import { useRefContext } from "@/Context/RefContext/RefContext";

function Hotelcard() {
  const isMobile = useMediaQuery({ query: "(max-width: 445px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const { trip } = useContext(LogInContext);
  const city = trip?.tripData?.[0]?.location;
  const hotels = trip?.tripData?.[0]?.hotels;

  const { holetsRef } = useRefContext();

  if (!trip || !hotels?.length) {
    return (
      <div ref={holetsRef} className="text-center opacity-80 py-4">
        Hotels will appear once trip data is loaded.
      </div>
    );
  }

  return (
    <div ref={holetsRef} className="flex flex-col md:flex-row flex-wrap gap-5">
      {hotels?.map((hotel, idx) => {
        return (
          <div key={idx} className="md:w-[48%]">
            <HotelCards className="hotel-card" hotel={hotel} />
          </div>
        );
      })}
    </div>
  );
}

export default Hotelcard;

// <React.Fragment key={idx}>
//   <HotelCards hotel={hotel} />
// </React.Fragment>
