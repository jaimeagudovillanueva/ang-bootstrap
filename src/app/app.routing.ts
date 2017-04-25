import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { SearchComponent } from './spotify/components/search.component';
import { ArtistComponent } from './spotify/components/artist.component';
import { TrackComponent } from './spotify/components/track.component';
import { AlbumComponent } from './spotify/components/album.component';
import { PersonaListComponent } from './personas/components/persona.list.component';
import { PersonaComponent } from './personas/components/persona.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PrincipalComponent },
  { path: 'search', component: SearchComponent },
  { path: 'personas', component: PersonaListComponent },
  { path: 'personas/:id', component: PersonaComponent} ,
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent }
]
export const routing = RouterModule.forRoot(ROUTES);