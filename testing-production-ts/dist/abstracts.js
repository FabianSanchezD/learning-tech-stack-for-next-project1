"use strict";
class TakingPhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calc
        return 8;
    }
}
class Twitter extends TakingPhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('sepia');
    }
}
const fabian = new Twitter('test', 'testing', 3);
fabian.getReelTime();
