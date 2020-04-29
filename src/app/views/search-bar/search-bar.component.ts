import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  /**
   * Angular's way of binding to html DOM element
   * without the use of having to search elements by id/class, but didnt use this approach due to some problems
   */
  @ViewChild('textInput', {static: false}) myInput: ElementRef;

  public searchTextInput: FormControl = new FormControl('');

  constructor(private gameService: GameDataService) { }

  ngOnInit(): void {
    //console.dir(this.myInput.nativeElement.value);
    this.searchTextInput.valueChanges.subscribe(v => {
      //console.log(this.searchTextInput.value);
      this.gameService.filterGamesByTitle(this.searchTextInput.value);
    })

  }

}
