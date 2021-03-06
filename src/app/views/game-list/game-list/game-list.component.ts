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
    this.resetNoFilter();
  }

  /**
   * return gameInfos array
   */
  public getGameInfos(): GameInfo[]{
    if(this.gameService && this.gameService.targetGameInfos){
      return this.gameService.targetGameInfos;
    
    }

  }

  public navigateToGameById(id: number): void{
    this.router.navigate(["home/game",id]);
    //console.log(id);
  }

  public resetNoFilter(): void{
    this.gameService.filterGamesByTitle("");
    this.router.navigate(["home"]);
  }

}
