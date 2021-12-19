import { IShoppingCartItem } from "./IShoppingCartItems";
import { Product } from "./product";

export class IShoppingCart {

    items: IShoppingCartItem[]=[];

    constructor(private itemsMap: {[productId: string]:IShoppingCartItem} ) { 
         this.itemsMap= this.itemsMap || []
        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new IShoppingCartItem(item.product, item.quantity))
        }
    }
    get totalItemsCount() {
        let counter = 0;
        for (let productID in this.itemsMap) {
            counter += this.itemsMap[productID].quantity;
        }
        return counter;
    }

    get totalPriceQuantity(){
        let sum = 0;
         for (let productID in this.items) {
            sum += this.items[productID].totalPrice;
         }
         return sum;
    }

    // get productIds(){
    //     return Object.keys(this.items);
    // }


    getQuantity(product:any) {
       
          let item = this.itemsMap[product.key];
          return item ? item.quantity : 0
        
      }
}