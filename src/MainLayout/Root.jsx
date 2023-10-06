import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className=" font-inter">
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;