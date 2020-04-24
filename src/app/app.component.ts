import { Component } from '@angular/core';
import { GameInfo } from './lib/game-components/game-info'; // how to import a class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = 'app';

  public gameInfos: GameInfo[] = [];

  constructor(){
    const game:GameInfo = new GameInfo("MHW", 5, "Kill monsters");
    this.gameInfos.push(game);
  }
}
