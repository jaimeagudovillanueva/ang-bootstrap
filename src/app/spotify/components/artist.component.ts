import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(public route: ActivatedRoute, public spotify: SpotifyService,
              public location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id)
      .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.location.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }
}
