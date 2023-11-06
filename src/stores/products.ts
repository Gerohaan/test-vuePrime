import { defineStore } from 'pinia';
import ProductService from "../services/productService"
import ProductCategoryService from "../services/productCategoryService"
import { ref } from 'vue';
const service = new ProductService()
const serviceCat = new ProductCategoryService()

export const useProductsStore  = defineStore('products', {
  state: () => {
    return {
      productOrig: ref(),
      products: ref(),
      filterProduct: ref([]),
      noResult: ref(false),
      cartList: []
    };
  },
  getters: {
   getProducts(state) {
      state.products = service.getProducts() 
      return state.products
    }
  },
  actions: {
    dinamicCart(param: {}){
      if(this.cartList.length > 0){
        let filter = []
        if(this.cartList.find(item => item.id === param.id)){
          filter = this.cartList.filter(item => item.id !== param.id)
          this.cartList = filter
          this.productOrig.find(el => el.id === param.id).addCart = false
          this.products.find(el => el.id === param.id).addCart = false
        }else{
          this.cartList.push(param)
          this.productOrig.find(el => el.id === param.id).addCart = true
          this.products.find(el => el.id === param.id).addCart = true  
        }
      }else{
        this.cartList.push(param)
        this.productOrig.find(el => el.id === param.id).addCart = true
        this.products.find(el => el.id === param.id).addCart = true 
      }
      
    },
    async filterByCategory(param: ''){
      if(param === null){
        this.products = this.productOrig
        return false
      }
      try {
        await serviceCat.fetchAll(param)
        this.products = serviceCat.getProductsCategory().value
      } catch (error) {
        throw error 
      }     
    },
    filterProductList(param: ''){
      if(param == ''){
        this.products = this.productOrig
      }else{
        let search = param
        let expresion = new RegExp(`${search}.*`, "i")
        let resultFilter = this.productOrig.filter(item => expresion.test(item.title))
        this.products = resultFilter
        if(resultFilter.length === 0){
          this.noResult = true  
        }else{
          this.noResult = false
        }
      }
    },
    async productsAll() {
      try {
        await service.fetchAll()
        this.productOrig = service.getProducts().value
      } catch (error) {
        throw error 
      }
    }
  },
});
