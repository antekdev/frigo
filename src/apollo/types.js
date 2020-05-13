import gql from 'graphql-tag';

export default gql`
  type Product {
    name: String!
    url_to_icon: String!
    isPossessed: Boolean!
  },
  type Recipe {
    name: String!,
    description: String,
    isAvailable: Boolean!,
    products: [Product!]!
  },

  type Mutation {
    addProduct(name: String!, url_to_icon: String!): Product,
    toggleProductPossession(name: String!): Boolean
  }
`;