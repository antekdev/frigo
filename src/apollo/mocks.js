import products from '@/mocks/products'

export function mockProducts(cache) {
  let typedProducts = products.map(x => {
    x.__typename = 'Product',
    x.isPossessed = false
    return x
  })
  cache.writeData({
    data: {
      products: typedProducts
    },
  });
}