import { Component, OnInit } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';
import { GameInfo } from 'src/app/lib/game-info';
import { Router } from '@angular/router'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private gameService: GameDataService, private router: Router) {}

  ngOnInit(): void {
  }

  /**
   * return gameInfos array
   */
  public getGameInfos(): GameInfo[]{
    if(this.gameService){
      return this.gameService.gameInfos;
    }
  }

  public navigateToGameById(id: number): void{
    //this.router.navigate(["/gameView",id]);
    console.log(id);
  }

}
