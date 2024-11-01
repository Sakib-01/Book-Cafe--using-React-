import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl border-2 border-green-800">
        <figure className="bg-gray-100 p-10 rounded-3xl">
          <img className="w-20  h-24 " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-5 ">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className=" badge badge-outline text-green-600  p-4"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title text-2xl text-gray-100 text-left">
            {bookName}
          </h2>
          <p className="text-xl text-gray-400 text-left">By:{author}</p>
          <p className="text-base text-gray-400 text-left">{category}</p>
          <hr className="border-dashed" />
          <div className="card-actions justify-start">
            <div className="badge badge-outline p-4"> Rating: {rating}</div>
            <div className="badge badge-outline p-4">{totalPages} pages</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
