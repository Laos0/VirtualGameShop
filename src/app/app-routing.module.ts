import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameViewComponent } from './views/game-view/game-view.component';
import { GameContainerComponent } from './views/game-container/game-container.component';


const routes: Routes = [
  {
    path: '', component: GameContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
