import { ref, Ref } from 'vue'
import axios from 'axios'
import IProduct from '../interfaces/IProduct'

class ProductCategoryService {
    private productsCategory:Ref<Array<IProduct>>

    constructor() {
        this.productsCategory = ref<Array<IProduct>>([]) 
    }

    getProductsCategory ():Ref<Array<IProduct>> {
        return this.productsCategory
    }

    async fetchAll(param: ''): Promise<void> {
        try {
            const url = 'https://fakestoreapi.com/products/category/'+param
            const response = await axios.get(url)
            this.productsCategory.value = await response.data.map(item => {
                return {...item, addCart: false}
            })
        } catch (error) {
            console.log(error)
            
        }
    }

}

export default ProductCategoryService