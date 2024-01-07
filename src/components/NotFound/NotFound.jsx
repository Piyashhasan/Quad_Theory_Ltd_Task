import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container  mt-10">
      <Link to="/">
        <button className="bg-orange-500 text-white px-10 py-2 rounded hover:bg-orange-600">
          Back
        </button>
      </Link>
      <h1 className="text-5xl font-bold text-red-600 text-center">
        404 not found ..!
      </h1>
      <p className="mt-10 text-2xl text-orange-500 text-center">
        Please type right url...
      </p>
    </div>
  );
};

export default NotFound;
