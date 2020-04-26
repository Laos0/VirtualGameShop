import { Injectable } from '@angular/core';
import { GameInfo } from '../lib/game-info';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  public gameInfos: GameInfo[] = []; // array of loaded gameInfo objects

  constructor() 
  {
    this.loadDataFromBackEnd();
  }

  public loadDataFromBackEnd(): void{

    // instead of doing http request, I will mock it instead
    const data = 
    [
      {
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
        imagePath: "asset/images/mhw.jpg"
      },
      {
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
        imagePath: "asset/images/mhw.jpg"
      },
    ];

    // parse json
    data.forEach(game => {
      const gameInfo: GameInfo = new GameInfo(
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
    });

  }


}
