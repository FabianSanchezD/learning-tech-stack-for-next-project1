function addTwo(num: number): number {
    return num + 2
    // return 'hello'
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

let value = addTwo(5)

loginUser('test', 'test@gmail.com')

// function getValue(myVal: number) {
//    if (myVal > 5) {
//        return true
//    }
//    return '200 OK'
//}

const getHello = (s: string): string => {
    return ''
}

const heros = ['thor', 'batman', 'spiderman', 'superman']
//const heros = [1, 2, 3, 4]

heros.map((hero):string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
    
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);

}

export {}