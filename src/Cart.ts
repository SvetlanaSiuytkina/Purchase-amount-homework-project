export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export class Cart {
    private items: CartItem[] = [];
    
    addItem(item: CartItem): void {
        const currentItem = this.items.find(i => i.id === item.id);

        if (currentItem) {
            currentItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);    //
    }

    getTotalPrice(): number {
        let total = 0;

        for (const item of this.items) {
            total += item.price * item.quantity;
        }

        return total;
    }

    getTotalPriceWithDiscount(discount: number): number {
        const fullPrice = this.getTotalPrice();
        const discountСoefficient = 1 - discount / 100;                     //
        
        return fullPrice * discountСoefficient;
    }

    getItems(): CartItem[] {
        return [...this.items];
    }
}