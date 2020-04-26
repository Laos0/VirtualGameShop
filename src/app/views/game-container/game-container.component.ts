import { Component, OnInit } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  constructor(private gameService: GameDataService) { }

  ngOnInit(): void {
  }

}
