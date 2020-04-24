import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../../lib/game-components/game-info';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  public gameInfo: GameInfo;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.gameInfo = new GameInfo("RE", 7, "Kill zombies");
  }

}
