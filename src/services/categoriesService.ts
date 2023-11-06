import { ref, Ref } from 'vue'
import axios from 'axios'

class CategoriesService {
    private categories:Ref<[]>

    constructor() {
        this.categories = ref([]) 
    }

    getCategories ():Ref<[]> {
        return this.categories
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://fakestoreapi.com/products/categories'
            const response = await axios.get(url)
            this.categories.value = await response.data
        } catch (error) {
            console.log(error)
            
        }
    }

}

export default CategoriesService