"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 10;
}
function provideId(id) {
    if (!id) {
        console.log('provide id');
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) { // checks if the property is in the account
        return account.isAdmin;
    }
    return false;
}
