// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBook: Int
  }
`;

// export the typeDefs
module.exports = typeDefs;
