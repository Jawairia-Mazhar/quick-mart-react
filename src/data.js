// ✅ Replace all the new URL() lines with direct imports
import mangoImg from './assets/mango.png';
import appleImg from './assets/apple.png';
import potatoImg from './assets/potato.png';
import breadImg from './assets/bread.png';
import milkImg from './assets/milk.png';
import eggImg from './assets/egg.png';

import carrotImg from './assets/vegetable.png';
import fruitImg from './assets/fruit.png';
import bakeryImg from './assets/bakery.png';
import meatImg from './assets/meat.png';
import dairyImg from './assets/dairy.png';
import snacksImg from './assets/snacks.png';

export const mostBoughtProducts = [
    {id: 1, name: "Mango", price: 350, quantity: "500gm", image: mangoImg},
    {id: 2, name: "Apples", price: 280, quantity: "500gm", image: appleImg},
    {id: 3, name: "Potato", price: 150, quantity: "1 kg", image: potatoImg},
    {id: 4, name: "Bread", price: 200, quantity: "Medium", image: breadImg},
    {id: 5, name: "Milk", price: 120, quantity: "500 ML", image: milkImg},
    {id: 6, name: "Eggs", price: 180, quantity: "6", image: eggImg},
];

export const featuredCategories = [
    {id: 1, name: "Vegetables", image: carrotImg},
    {id: 2, name: "Fruits", image: fruitImg},
    {id: 3, name: "Bakery", image: bakeryImg},
    {id: 4, name: "Meat", image: meatImg},
    {id: 5, name: "Milk & Dairy", image: dairyImg},
    {id: 6, name: "Snacks", image: snacksImg},
];