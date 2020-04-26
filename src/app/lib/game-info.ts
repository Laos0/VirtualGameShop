
// creating a GameInfo class
export class GameInfo{


    // doiing this way will allow us to bypass doing this.title = title in the constructor 
    constructor(
        public title: String, 
        public description: String,
        public numberOfPlayers: number,
        public online: boolean,
        public releaseYear: number,
        public releaseDay: number,
        public releaseMonth: number,
        public genre: String,
        public rating: number,
        public price: number,
        public publisher: String,
        public imagePath: String
        ){
    }

    // how to write a method in typeScript
    public getTitle(): String{
        return this.title;
    }

    /**
     * 
     * @param name enter a person's name
     */
    public testingVoidMethod(name: String): void{
        console.log("testingVoidMethod ran!");
    }

}

