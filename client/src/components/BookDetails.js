import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });

  const displayBookInfo = () => {
    if (loading) {
      return <div>Loading books...</div>;
    } else if (error) {
      return <div>Error occurred...</div>;
    } else if (data.Book) {
      const { Book } = data;
      return (
        <div>
          <h2>{Book.name}</h2>
          <p>{Book.genre}</p>
          <p>{Book.Author.name}</p>
          <p>All books by this author:</p>
          <ul className="otherBooks">
            {Book.Author.Books.map((book) => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  if (!bookId) {
    return null;
  }

  return <div id="bookDetails">{displayBookInfo()}</div>;
}

export default BookDetails;
