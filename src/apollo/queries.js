import gql from 'graphql-tag';

export const productsQuery = gql`
  {
    products @client {
      name
      url_to_icon
      isPossessed
    }
  }
`;