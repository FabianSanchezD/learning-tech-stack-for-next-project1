interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleToken?: string
    // startTrail: () => string,
    startTesting() : string,
    getCoupon(couponname: string, discount: number): string
}

interface User {
    githubToken: string
}

interface Administrator extends User {
    role: 'admin' | 'ta' | 'learner'
}

const fabian: Administrator = {dbId: 124235123123, email: "f@hf.com", userId: 12334, githubToken: 'fsfdg', role: 'admin', 
startTesting: () => {
    return 'test'
},
getCoupon: (name: 'Fabian2025', off: 20) => {
    return `${name} gets ${off}% off! ${fabian.email}`
}}
 
fabian.email = "fabian@g.com"