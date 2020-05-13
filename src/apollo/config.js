import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import typeDefs from '@/apollo/types'
import resolvers from '@/apollo/resolvers'
import { mockProducts } from '@/apollo/mocks'

// HTTP connection to the API
export const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
})

// Cache implementation
export const cache = new InMemoryCache()

mockProducts(cache)

// Create the apollo client
export const apolloClient = new ApolloClient({
  typeDefs,
  resolvers,
  link: httpLink,
  cache,
})