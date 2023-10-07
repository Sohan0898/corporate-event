import { useLoaderData, useParams } from "react-router-dom";
import ServicesDetailsCard from "./ServicesDetailsCard";
import { useEffect, useState } from "react";

const ServicesDetails = () => {
      
    const [details, setDetails] = useState({});
    const { id } = useParams();
  
    const events = useLoaderData();
  
    useEffect(() => {
      const findServiceCardDetails = events?.find((details) => details.id == id);
  
      setDetails(findServiceCardDetails);
    }, [events, id]);
  
    return (
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 py-4 my-9 ">
        <ServicesDetailsCard details={details}></ServicesDetailsCard>
      </div>
    );
};

export default ServicesDetails;