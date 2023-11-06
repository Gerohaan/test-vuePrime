interface IProduct {
    id?: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: object,
    addCart: boolean

}

export default IProduct