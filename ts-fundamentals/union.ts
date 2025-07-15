let score: number | string = 33;

score = 44;
score = '45';

type realUser = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let fabianSancgez: realUser | Admin = {name: 'Fabian', id: 1234}

fabianSancgez = {username: 'fabiansanchezd', id:1234}

const getDbId = (id: number | string) => {
    if (typeof id === 'string') {
        id.toLowerCase()
    } else {
        id += 2
    }
    return id
}

getDbId(3)
getDbId('3')

//array

const data: Array<number | string> = [1, 2, 3, 4, "5"]

let seatAllowtment: 'aisle' | 'middle' | 'window';

//seatAllowtment = 'crew';