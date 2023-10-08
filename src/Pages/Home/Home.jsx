import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../../components/Main/Services/Services";
import Reviews from "../../components/Main/Reviews/Reviews";
import Scroll from "../../components/Main/ScrollBtn/Scroll";
import EventManage from "../../components/Main/EventManage/EventManage";



const Home = () => {
    
    const cards = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            
            <Services cards={cards}></Services>
            
            <EventManage></EventManage>
            <Reviews></Reviews>
            <Footer></Footer>
            <Scroll></Scroll>
        </div>
    );
};

export default Home;