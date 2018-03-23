import firebase from '../common/firebase'

export const loadProducts = () => {
  return async (dispatch) => {
    const products = await firebase.database().ref('/products').once('value')
    dispatch({type: 'SHOW_PRODUCTS', products: products})
  }
}

export const addProduct = () => {
  return async (dispatch) => {
    const addProducts = await firebase.database().ref('/products/1').set({
      productTitle: 'Carrots',
      productPrice: '₱1500 / 10 kg',
      productLocation: 'OTON, ILOILO',
      productDescription: 'Perfect accompaniment for mains and sandwiches. Ideal edible bed for roasted...',
      productImageUri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp3.png?alt=media&token=7fd95509-ea2b-4188-b85e-218609d5ee26'
    })
    console.log(addProducts)
  }
}

export const viewProducts = (products) => ({
  type: 'SHOW_PRODUCTS',
  products: products
})
