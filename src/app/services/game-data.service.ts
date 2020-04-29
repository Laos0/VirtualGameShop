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
        description: "Kill monsters",
        numberOfPlayers: 1,
        online: true,
        releaseYear: 2018,
        releaseMonth: 1,
        releaseDay: 10,
        genre: "Action, RPG",
        rating: 10,
        price: 59.99,
        publisher: "Capcom",
        imagePath: "assets/images/mhw.jpeg"
      },
      {
        id: 2,
        title: "Resident Evil 3 Remake",
        description: "Kill Zombie",
        numberOfPlayers: 1,
        online: true,
        releaseYear: 2018,
        releaseMonth: 1,
        releaseDay: 10,
        genre: "Action, RPG",
        rating: 10,
        price: 59.99,
        publisher: "Capcom",
        imagePath: "assets/images/re3.jpeg"
      },
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


}
