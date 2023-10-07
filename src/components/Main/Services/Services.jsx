import ServicesCard from "../ServicesCard/ServicesCard";


const Services = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 mb-12" >
            <h1 className="text-4xl  font-bold">Browse our Services</h1>
            <br />
            <br />
            <div className="grid grid-cols-3 justify-center gap-5"><ServicesCard></ServicesCard>
            <ServicesCard></ServicesCard>
            <ServicesCard></ServicesCard>
            <ServicesCard></ServicesCard>
            <ServicesCard></ServicesCard>
            <ServicesCard></ServicesCard></div>

        </div>
    );
};

export default Services;