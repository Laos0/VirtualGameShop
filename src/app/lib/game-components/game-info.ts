
// creating a GameInfo class
export class GameInfo{

    public name: String;
    public rating: number;
    public description: String;

    constructor(name: String, rating: number, description: String){
        this.name = name;
        this.rating = rating;
        this.description = description;
    }

    // how to write a method in typeScript
    public getName(): String{
        return this.name;
    }

    /**
     * 
     * @param name enter a person's name
     */
    public testingVoidMethod(name: String): void{
        console.log("testingVoidMethod ran!");
    }

}

