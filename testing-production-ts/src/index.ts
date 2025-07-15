// class User {
//     public email: string
//     name:string
//     private readonly city: string = 'Cartago'
//     constructor(email:string, name : string) {
//         this.email = email;
//         this.name = name;
//     }
// }

class User {

    protected _courseCount = 1;

    readonly city: string = 'Cartago'
    constructor(public email:string, 
        public name:string,
        private userId:string
    ) 
        {}

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    private deleteToken(){
        console.log('delete token')
    }

    get courseCount(): number{ //get propertly
        return this._courseCount
    }

    set courseCount(courseNum) { // set property
        if (courseNum <= 1) {
            throw new Error('should be more than one')
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFam: boolean = true
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const fabian = new User("f@gmail.com", "fabian", '123gdfsdf')
