import React, { Suspense, useEffect, useState } from "react";
import { data } from "react-router";
import SingleBook from "./SingleBook";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(()=> {
  //     fetch('/booksData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //         // console.log(data)
  //         setAllBooks(data)
  //     })
  // }, [])

  const bookPromiseData = fetch("/booksData.json").then((res) => res.json());

  return (
    <div>
      <Suspense fallback={<h2>Loading.......</h2>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {data.map((book) => (
            <SingleBook key={book.id} book={book}></SingleBook>))
          }
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
