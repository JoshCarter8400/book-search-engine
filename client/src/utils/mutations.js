import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($saveBookInput: saveBookInput!) {
    saveBook(input: saveBookInput) {
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: Int!) {
    removeBook(bookId: $bookId) {
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;
