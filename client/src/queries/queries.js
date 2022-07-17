import { gql } from "@apollo/client";

const getBooksQuery = gql`
  query GetBooks {
    allBooks {
      name
      id
      genre
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: ID!) {
    Book(id: $id) {
      id
      name
      genre
      Author {
        id
        name
        age
        Books {
          name
          id
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
  query GetAuthors {
    allAuthors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    createBook(name: $name, genre: $genre, author_id: $authorId) {
      name
      id
    }
  }
`;

export { getBooksQuery, getBookQuery, getAuthorsQuery, addBookMutation };
