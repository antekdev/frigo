import gql from 'graphql-tag';

export const addProductMutation = gql`
  mutation($productName: String!, $productUrl: String!) {
    addProduct(name: $productName, url_to_icon: $productUrl) @client
  }
`;

export const toggleProductPossessionMutation = gql`
  mutation($name: String!) {
    toggleProductPossession(name: $name) @client
  }
`;