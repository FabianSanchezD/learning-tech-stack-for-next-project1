var fabian = { dbId: 124235123123, email: "f@hf.com", userId: 12334,
    startTrail: function () {
        return 'trial started';
    },
    startTesting: function () {
        return 'test';
    },
    getCoupon: function (name, off) {
        console.log("".concat(name, " gets ").concat(off, "% off! ").concat(fabian.dbId));
    } };
fabian.email = "fabian@g.com";


fabian.getCoupon('FabianS', 20)