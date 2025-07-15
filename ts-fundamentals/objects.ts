const user = {
    name: 'Fabian',
    email: 'fabiansanchezd@outlook.com',
    isActive: true
}

//function createUser({name: string, isPaid:boolean}) {

//}

let newUser = {name: 'Fabian', isPaid: false, email: 'f@f.com'};

//createUser(newUser)

function createCourse():{name: string, price: number} {
    return {name: 'react', price: 400}
}

type User = {
    readonly _id: string; //cant change
    name: string;
    email: string;
    isActive: boolean
    credcardDetail? : number //optional
}

let myUser: User = {
    _id: "12331",
    name: "fabian",
    email: "teste@test.com",
    isActive: false
}

type cardNumber = {
    cardnum: string
}

type cardDate = {
    cardate: string
}

type cardDetails = cardNumber & cardDate  & { //and
    cvv: number
}

let credCard1 : cardDetails = {cardnum: "123", cardate: "123", cvv: 123}

myUser.email = 'test@email.com'
// myUser._id = 123143

export {}