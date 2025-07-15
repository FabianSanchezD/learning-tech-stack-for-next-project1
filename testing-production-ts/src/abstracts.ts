abstract class TakingPhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getReelTime(): number{
        //some complex calc
        return 8
    }

}

class Twitter extends TakingPhoto {
    constructor(public cameraMode: string, 
                public filter: string,
                public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia():void {
        console.log('sepia')
    }
}

const fabian = new Twitter('test', 'testing', 3)

fabian.getReelTime()
