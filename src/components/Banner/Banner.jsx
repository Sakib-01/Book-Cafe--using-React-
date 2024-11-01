import React from "react";
import bannerImg from "../../../public/books.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 py-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="w-80 rounded-lg shadow-2xl mr-20" />
          <div className="text-left ml-20 ">
            <h1 className="text-5xl  font-bold">
              Books to freshen up your Bookself!
            </h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-green-800">View the List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
