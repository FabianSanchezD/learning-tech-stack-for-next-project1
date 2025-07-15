"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = 'Cartago';
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    deleteToken() {
        console.log('delete token');
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('should be more than one');
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFam = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const fabian = new User("f@gmail.com", "fabian", '123gdfsdf');
