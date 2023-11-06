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
      cartList: [],
      totalCart: ref(0)
    };
  },
  getters: {
   getProducts(state) {
      state.products = service.getProducts() 
      return state.products
    },
    getcartList(state){ 
      return state.cartList
    },
    getTotalCart(state){
      let cartList = state.cartList
      let reduce = cartList.reduce((sum, current) => sum + parseFloat(current.price), 0)
      return reduce.toFixed(2)
    }
  },
  actions: {
    dinamicCart(param: {}){
      if(this.cartList.length > 0){
        let filter = []
        if(this.cartList.find(item => item.id === param.id)){
          filter = this.cartList.filter(item => item.id !== param.id)
          this.cartList = filter
        }else{
          this.cartList.push(param)
        }
      }else{
        this.cartList.push(param)
        
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
  persist: {
    storage: sessionStorage
  },
});
