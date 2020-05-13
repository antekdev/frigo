<template>
    <div class='fridge' v-if="products.length">
      <div v-for="(__, rowIndex) in shelfCount" :key="'shelf' + rowIndex" class='fridge__shelf'>
        <ProductItemComponent
          v-for="(_, columnIndex) in 3" 
          :key="'item' + rowIndex + columnIndex"

          v-bind:imgSrc="getProductImgSrc(rowIndex, columnIndex)"
          v-bind:possessed='true' 
          v-on:possessed='possessed => toggleProductPossession(rowIndex, columnIndex, possessed)'
        />
      </div>
    </div>
    <div v-else class='loader' />
</template>

<script>
import ProductItemComponent from '@/components/fridge/ProductItemComponent'
import { toggleProductPossessionMutation } from '@/apollo/mutations'
import { productsQuery } from '@/apollo/queries'

// mounted
async function getProducts() {
  let result = await this.$apollo.query({query: productsQuery})
  this.products = result.data.products
}

// for every product item
function getProductImgSrc(rowIndex, columnIndex) {
  let product = this.products[rowIndex * 3 + columnIndex]
  return product ? product.url_to_icon : null
}

// on click on product item
async function toggleProductPossession(rowIndex, columnIndex, possessed) {
  let product = this.products[rowIndex * 3 + columnIndex]
  console.log('a', product.name)
  let productName = product.name
  if (product) {
    let mutationResult = await this.$apollo.mutate({
      mutation: toggleProductPossessionMutation,
      variables: {
        name: productName
      }
    })
    console.log({mutationResult})
  } 
}

export default {
  name: 'FridgeComponent',
  data: () => ({
    products: []
  }),
  computed: {
    shelfCount: function () {
      return Math.ceil(this.products.length/3)
    }
  },
  components: {ProductItemComponent},
  mounted: getProducts,
  methods: {
    getProductImgSrc,
    toggleProductPossession
  }
}
</script>

<style scoped>
.fridge {
  margin-top: 2vh;
  margin-left: 2.5vw;
  width: 90vw;
  height: 78vh;
  border: 2.5vw solid teal;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.fridge__shelf {
  width: 85vw;
  border-bottom: 4px solid teal;
  padding-bottom: 1vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>