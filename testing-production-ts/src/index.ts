class User {
    email: string
    name:string
    readonly city: string = 'Cartago'
    constructor(email:string, name : string) {
        this.email = email;
        this.name = name;
    }
}

const fabian = new User("f@gmail.com", "fabian")
