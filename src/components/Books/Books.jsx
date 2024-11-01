import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl text-white">Books {books.length}</h2>
    </div>
  );
};

export default Books;
