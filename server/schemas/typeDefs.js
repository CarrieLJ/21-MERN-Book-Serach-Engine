const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String
    title: Int
  }

  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;
