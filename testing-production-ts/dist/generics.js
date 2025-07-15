"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree('dfgdg');
function identityFour(val) {
    return val;
}
identityFour({ brand: "Fiji", type: 1234 });
function getSearchProduct(product) {
    // db ops
    const index = 3;
    return product[index];
}
const getMoreSearchProducts = (products) => {
    //db ops
    const finalIndex = 4;
    console.log(products.length);
    return products[finalIndex];
};
function anotherFunc(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunc(3, { connection: "gone", username: 'fabian', password: 'test1234' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCard(products) {
        this.cart.push(products);
    }
}
