import { Cart, type CartItem } from '../Cart.js';

let cart: Cart;
let item1: CartItem;
let item2: CartItem;

beforeEach(() => {
    cart = new Cart();

    item1 = {id: 7, name: 'Товар1', price: 77, quantity: 2};
    item2 = {id: 1, name: 'Товар2', price: 3, quantity: 1};

    cart.addItem(item1);
    cart.addItem(item1);
});

test('must add an item with an existing id', ()=> {
    const itemDuplicate = {...item1, quantity: 5};
    cart.addItem(itemDuplicate);
    const items = cart.getItems();
    expect(items[0].quantity).toBe(7);
});

test('must delete the product by id', ()=> {
    cart.removeItem(7)
    //////////////
    expect(items[0].id).toBe();
});

test('must correctly calculate the total cost without discount', ()=> {
    const total = cart.getTotalPrice();
    expect(total).toBe(157);
});

test('should correctly calculate the total cost with a 5% discount', ()=> {
    const totalWithDiscount = cart.getTotalPriceWithDiscount(5);
    expect(totalWithDiscount).toBe(149.15);
});


test('', ()=> {
    expect().toBe();
});