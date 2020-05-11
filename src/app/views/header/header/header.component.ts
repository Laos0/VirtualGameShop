import { Component, OnInit } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataGameService: GameDataService) { }

  ngOnInit(): void {
  }

  public resetFilter(): void{
    this.dataGameService.filterGamesByTitle("");
  }

}
