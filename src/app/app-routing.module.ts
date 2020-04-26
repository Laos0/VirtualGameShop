import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameViewComponent } from './views/game-view/game-view.component';
import { GameContainerComponent } from './views/game-container/game-container.component';
import { GameListComponent } from './views/game-list/game-list/game-list.component';


const routes: Routes = [
  {path: 'home', component: GameContainerComponent, 
    children: [
      {path:'', component: GameListComponent},
      {path:'game/:id', component: GameViewComponent}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
