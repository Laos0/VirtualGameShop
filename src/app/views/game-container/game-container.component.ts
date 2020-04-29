import { Component, OnInit } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  public showSearchBar: boolean = true;
  constructor(private gameService: GameDataService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(v => {
      console.log(this.router.url);
      if(this.router.url.includes("/home/game/")){
        this.showSearchBar = false;
      }else{
        this.showSearchBar = true;
      }
    })
  }

}
