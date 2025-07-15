interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleToken?: string
    startTrail: () => string,
    startTesting() : string,
    getCoupon(couponname: string, discount: number): string
}

const fabian: User = {dbId: 124235123123, email: "f@hf.com", userId: 12334, 
    startTrail: () => {
    return 'trial started'
},
startTesting: () => {
    return 'test'
},
getCoupon: (name: 'Fabian2025', off: 20) => {
    return `${name} gets ${off}% off!`
}}

fabian.email = "fabian@g.com"