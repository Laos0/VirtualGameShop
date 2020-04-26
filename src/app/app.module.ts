import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameViewComponent } from './views/game-view/game-view.component';
import { GameContainerComponent } from './views/game-container/game-container.component';
import { HeaderComponent } from './views/header/header/header.component';
import { FooterComponent } from './views/footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    GameContainerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
