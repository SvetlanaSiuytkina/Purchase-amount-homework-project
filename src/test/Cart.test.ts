import { Cart, type CartItem } from '../Cart.js';

let cart: Cart;
let item1: CartItem;
let item2: CartItem;

beforeEach(() => {
    cart = new Cart();

    item1 = {id: 7, name: 'Товар1', price: 77, quantity: 2};
    item2 = {id: 1, name: 'Товар2', price: 3, quantity: 1};

    cart.addItem(item1);
    cart.addItem(item2);
});

test('must add an item with an existing id', () => {
    const itemDuplicate = {...item1, quantity: 5};
    cart.addItem(itemDuplicate);
    const items = cart.getItems();
    const itemIdSeven = items.find(item => item.id === 7);

    if (!itemIdSeven) {
        throw new Error('Товар id7 нет в корзине');
    }

    expect(itemIdSeven.quantity).toBe(7);
});

test('must delete the product by id', () => {
    cart.removeItem(7)
    const items = cart.getItems();
    const itemIdSeven = items.find(item => item.id === 7);
    expect(itemIdSeven).toBeUndefined();
});

test('must correctly calculate the total cost without discount', () => {
    const total = cart.getTotalPrice();
    expect(total).toBe(157); //   77*2 + 3 
});

test('should correctly calculate the total cost with a 5% discount', () => {
    const totalWithDiscount = cart.getTotalPriceWithDiscount(5);
    expect(totalWithDiscount).toBe(149.15);  // 157*0.95
});