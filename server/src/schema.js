const { gql } = require('apollo-server');

const typeDefs = gql`
type Query{
    "Get Tracks array for homepage grid"
    tracksForHome: [Track!]!
}

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the title not null"
    title: String!
    "the main author not null"
    author: Author!
    "the main illustration to display in track card or track page detail"
    thumbnail: String
    "the approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
