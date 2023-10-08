import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-10">404 !</h1>
        <h3 className="text-2xl text-gray-600 font-medium mb-3">
          Page Not Found
        </h3>
        <Link>
          <button className="btn bg-[#FF444A] text-white">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
