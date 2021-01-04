// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: Int
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!): Auth
    saveBook(input: saveBookInput, authors: [String!]): User
    removeBook(bookId: Int!): User
  }

  input saveBookInput {
    authors: String!
    description: String!
    title: String!
    bookId: Int
    image: String!
    link: String!
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
