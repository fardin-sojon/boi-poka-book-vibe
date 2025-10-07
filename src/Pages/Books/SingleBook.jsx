import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleBook = ({ book }) => {
  // console.log(book);

  // const data = use(bookPromiseData);
  // console.log(data);


//   {
//     "id": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": [
//         "Fiction",
//         "Romance"
//     ],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
// }

    const {id, bookName, author, image, review, rating, category, yearOfPublishing, tags, publisher, totalPages} = book

  return (
    <div>
      <Link to={`/bookDetails/${id}`}>
        <div className="card bg-base-100 w-96 shadow-sm p-5 rounded-lg h-96 mx-auto">
        <figure className="bg-base-200">
          <img
          className="h-[165px] p-5"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <div className="flex justify-center gap-6">
                {
                    tags.map((tag)=><button className="bg-base-300 px-2 py-1 rounded-xl">{tag}</button>)
                }
            </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">Pages: {totalPages}</div>
          </h2>
          <p>Book By: {publisher}</p>
          <div className="card-actions justify-between items-center mt-5 border-t-2 border-dotted border-base-300 pt-4">
            <div className="badge">{category}</div>
            <div className="badge">Rating: {rating} <FaStar /> </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default SingleBook;
