function detectType(val: number | string): number | string {
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 10
}

function provideId(id: string | null) {
    if (!id){
        console.log('provide id')
        return
    }
    id.toLowerCase()
}

interface User {
    name: string,
    email: string
}

interface Admin extends User {
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin): boolean {
    if ("isAdmin" in account) { // checks if the property is in the account
        return account.isAdmin
    }
    return false
}