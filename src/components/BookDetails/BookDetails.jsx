import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const Id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === Id);
  const {
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

  console.log(data);
  console.log(bookId);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-left ml-10">
            <h1 className="text-5xl font-bold mb-5">{bookName}</h1>
            <p className="py-6 text-left">{review}</p>
            <div className="flex items-center gap-5  space-x-10">
              <p className="py-6">By: {author}</p>
              <p className="py-6">Rating {rating}</p>
              <p className="py-6"> {category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
