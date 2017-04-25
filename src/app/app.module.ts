import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PlantillaComponent } from './base/plantilla.component';
import { PrincipalComponent } from './principal/principal.component';
import { SearchComponent } from './spotify/components/search.component';
import { ArtistComponent } from './spotify/components/artist.component';
import { TrackComponent } from './spotify/components/track.component';
import { AlbumComponent } from './spotify/components/album.component';
import { PersonaListComponent } from './personas/components/persona.list.component';
import { PersonaComponent } from './personas/components/persona.component';

import {SPOTIFY_PROVIDERS} from './spotify/services/spotify.service';
import {PERSONAS_PROVIDERS} from './personas/services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    PrincipalComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent,
    PersonaListComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SimpleNotificationsModule,
    routing
  ],
  providers: [
    NotificationsService,
    SPOTIFY_PROVIDERS,
    PERSONAS_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
