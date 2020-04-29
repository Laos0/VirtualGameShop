import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../../lib/game-info';
import { GameDataService } from 'src/app/services/game-data.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  public gameInfo: GameInfo;

  constructor(private gameService: GameDataService, private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    /*
    this.activatedRoute.parent.params.pipe(take(1)).subscribe((p) =>{
      const id: number = p['id'];
      this.gameInfo = this.gameService.getGameById(id);
    });
    */

   const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
   this.gameInfo = this.gameService.getGameById(id);

  }

}
