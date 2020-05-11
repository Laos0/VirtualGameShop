import { Injectable } from '@angular/core';
import { GameInfo } from '../lib/game-info';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  public gameInfos: GameInfo[] = []; // array of loaded gameInfo objects
  public filterGameInfos: GameInfo[] = []; // for filter game
  public targetGameInfos: GameInfo[] = []; // point to filter you want to see

  constructor() 
  {
    this.loadDataFromBackEnd();
  }

  public loadDataFromBackEnd(): void{

    // instead of doing http request, I will mock it instead
    const data = 
    [
      {
        id: 1,
        title: "Monster Hunter World",
        description: "Monster Hunter: World is an action role-playing game developed and published by Capcom. A part of the Monster Hunter series, it was released worldwide for PlayStation 4 and Xbox One in January 2018, with a Microsoft Windows version following in August 2018.",
        numberOfPlayers: 1,
        online: true,
        releaseYear: 2018,
        releaseMonth: 1,
        releaseDay: 26,
        genre: "Action, RPG",
        rating: 9,
        price: 14.99,
        publisher: "Capcom",
        imagePath: "assets/images/mhw.jpeg"
      },
      {
        id: 2,
        title: "Resident Evil 3 Remake",
        description: "Resident Evil 3 is a survival horror game developed and published by Capcom. It is a remake of Resident Evil 3: Nemesis and follows Jill Valentine and Carlos Oliveira as they attempt to survive a zombie apocalypse while hunted by the intelligent bioweapon Nemesis.",
        numberOfPlayers: 1,
        online: false,
        releaseYear: 2020,
        releaseMonth: 4,
        releaseDay: 3,
        genre: "Shooting",
        rating: 7,
        price: 59.99,
        publisher: "Capcom",
        imagePath: "assets/images/re3.jpeg"
      },
      {
        id: 3,
        title: "Final Fantasy VII Remake",
        description: "Kill Zombie",
        numberOfPlayers: 1,
        online: false,
        releaseYear: 2020,
        releaseMonth: 4,
        releaseDay: 10,
        genre: "ARPG",
        rating: 10,
        price: 59.99,
        publisher: "Square Enix",
        imagePath: "assets/images/ff7.jpeg"
      },
      {
        id: 4,
        title: "Call of Duty",
        description: "Kill Serving as the sixteenth overall installment in the Call of Duty series, as well as a reboot of the Modern Warfare sub-series, it was released on October 25, 2019, for Microsoft Windows, PlayStation 4, and Xbox One. The game takes place in a realistic and modern setting.",
        numberOfPlayers: 1,
        online: true,
        releaseYear: 2019,
        releaseMonth: 10,
        releaseDay: 25,
        genre: "Shooting, FPS",
        rating: 10,
        price: 54.99,
        publisher: "Square Enix",
        imagePath: "assets/images/cod.jpeg"
      },
      {
        id: 5,
        title: "Star Wars Jedi Fallen Order",
        description: "Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts.",
        numberOfPlayers: 1,
        online: false,
        releaseYear: 2019,
        releaseMonth: 11,
        releaseDay: 15,
        genre: "Action, Adventure",
        rating: 9,
        price: 49.99,
        publisher: "Respawn Entertainment",
        imagePath: "assets/images/starwars.jpeg"
      },
      {
        id: 6,
        title: "The Elder Scroll V: Skyrim",
        description: "an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.",
        numberOfPlayers: 1,
        online: false,
        releaseYear: 2011,
        releaseMonth: 11,
        releaseDay: 11,
        genre: "Action, RPG",
        rating: 10,
        price: 39.99,
        publisher: "Bethesda",
        imagePath: "assets/images/esSkyrim.jpeg"
      },
      {
        id: 7,
        title: "Destiny 2",
        description: "Destiny 2 is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie.",
        numberOfPlayers: 1,
        online: true,
        releaseYear: 2017,
        releaseMonth: 9,
        releaseDay: 6,
        genre: "FPS, MMORPG",
        rating: 9,
        price: 1.97,
        publisher: "Bungie",
        imagePath: "assets/images/D2.jpeg"
      },
      {
        id: 8,
        title: "The Last of Us",
        description: "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States.",
        numberOfPlayers: 1,
        online: true,
        releaseYear: 2013,
        releaseMonth: 6,
        releaseDay: 14,
        genre: "Action, Adventure",
        rating: 10,
        price: 19.99,
        publisher: "Pearl AbyssNaughty Dog",
        imagePath: "assets/images/tlou.jpeg"
      },
      {
        id: 9,
        title: "For Honor",
        description: "The For Honor story is the tale of warriors who were shaken by a cataclysm that re-shaped their world.",
        numberOfPlayers: 1,
        online: true,
        releaseYear: 2017,
        releaseMonth: 2,
        releaseDay: 14,
        genre: "Action",
        rating: 8,
        price: 13.97,
        publisher: "Ubisoft",
        imagePath: "assets/images/forHonor.jpeg"
      },
      {
        id: 10,
        title: "The Witcher 3: Wild Hunt",
        description: "Players control protagonist Geralt of Rivia, a monster slayer (known as a Witcher) who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers.",
        numberOfPlayers: 1,
        online: false,
        releaseYear: 2015,
        releaseMonth: 5,
        releaseDay: 19,
        genre: "Action, RPG",
        rating: 10,
        price: 12.12,
        publisher: "CD Projekt",
        imagePath: "assets/images/theWitcher3.jpeg"
      }

    ];

    // parse json
    data.forEach(game => {
      const gameInfo: GameInfo = new GameInfo(
        game.id,
        game.title,
        game.description,
        game.numberOfPlayers,
        game.online,
        game.releaseYear,
        game.releaseMonth,
        game.releaseDay,
        game.genre,
        game.rating,
        game.price,
        game.publisher,
        game.imagePath
        );

        this.gameInfos.push(gameInfo);
        this.targetGameInfos = this.gameInfos;
    });

  }

  public getGameById(id: number): GameInfo{

    let game:GameInfo = null;

    console.log("Searching by id: " + id);

    if(id >= 0){

      if(this.gameInfos && this.gameInfos.length){
        game = this.gameInfos.find(x => x.id === id);
        
        if(!game){
          console.warn("<< game-data.service >> : getGameById() fail, game is null");
        }
      }else{

        console.warn("<< game-data.service >> : array is invalid");
      }

    }else{

      console.warn("<< game-data.service >> : id is invalid");
    }

    
    return game;
  }

  /**
   * 
   * @param title 
   */
  public filterGamesByTitle(titlePrefix: string): void{
    this.filterGameInfos = [];

    if(titlePrefix){

      this.filterGameInfos = this.gameInfos.filter(g => g.title.toUpperCase().includes(titlePrefix.toUpperCase()));
      this.targetGameInfos = this.filterGameInfos;
    }else{
      this.targetGameInfos = this.gameInfos;
    }


  }

  public filterGamesByGenre(genre: string): void{
    this.filterGameInfos = [];

    if(genre){

      this.filterGameInfos = this.gameInfos.filter(g => g.genre.toUpperCase().includes(genre.toUpperCase()));
      this.targetGameInfos = this.filterGameInfos;
      console.log("A");
    }else{
      this.targetGameInfos = this.gameInfos;
      console.log("b");
    }
  }


}
