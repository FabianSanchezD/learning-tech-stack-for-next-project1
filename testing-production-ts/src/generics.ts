const score: Array<number> = []
const names: Array<number> = []

function identityOne(val: boolean | number): boolean | number  {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3)
identityThree('dfgdg')

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string, 
    type: number
}

identityFour<Bottle>({brand: "Fiji", type: 1234})

function getSearchProduct<Type>(product: Type[]): Type {
    // db ops
    const index = 3
    return product[index]
}

const getMoreSearchProducts = <T>(products: T[]):T => {
    //db ops
    const finalIndex = 4
    console.log(products.length)
    return products[finalIndex];
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    }
}

anotherFunc(3, {connection: "gone", username: 'fabian', password:'test1234'})

interface Quiz {
    name: string, 
    type: string
}

interface Course {
    name: string,
    author: string, 
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCard(products: T) {
        this.cart.push(products)
    }
}