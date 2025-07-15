interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): boolean
}

class Instagram implements TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {

    }
}

class Youtube implements TakePhoto, Story{
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) {

    }

    createStory(): boolean {
        return true
    }
}