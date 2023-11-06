import { ref, Ref } from 'vue'
import axios from 'axios'
import IProduct from '../interfaces/IProduct'

class ProductService {
    private products:Ref<Array<IProduct>>

    constructor() {
        this.products = ref<Array<IProduct>>([]) 
    }

    getProducts ():Ref<Array<IProduct>> {
        return this.products
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://fakestoreapi.com/products'
            const response = await axios.get(url)
            this.products.value = await response.data
            
        } catch (error) {
            console.log(error)
            
        }
    }

}

export default ProductService