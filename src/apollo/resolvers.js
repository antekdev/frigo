import { productsQuery } from '@/apollo/queries'

export default {
  Mutation: {
    addProduct: (_, { name, url_to_icon }, {cache}) => {
      const data = cache.readQuery({ query: productsQuery });
      console.log('Resolving add product', data)
      let product = {name, url_to_icon, isPossessed: false}
      return product
    },
    toggleProductPossession: (_, {name}, {cache}) => {
      const data = cache.readQuery({ query: productsQuery });
      let targetProductID = data.products.findIndex(x => x.name == name)
      let newStatus = !data.products[targetProductID].isPossessed
      data.products[targetProductID].isPossessed = newStatus
      cache.writeQuery({ query: productsQuery, data })
      return newStatus
    } 
  }
};