import { IShoppingCart } from "./IShoppingCart";

export class Order {
    datePlaced!: number;
    items!: any[];

    constructor(public shipping: any, shoppingCart: IShoppingCart) {
        this.datePlaced = new Date().getTime();
        // this.userId= userId
        this.items = shoppingCart.items.map(i => {
            return {
                product: {
                    title: i.product.title,
                    price: i.product.price,
                    imgUrl: i.product.imgUrl
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            }
        })
    }
}