import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(public route: ActivatedRoute,
              public spotify: SpotifyService, 
              public location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getAlbum(this.id)
      .subscribe((res: any) => this.renderAlbum(res));
  }

  back(): void {
    this.location.back();
  }

  renderAlbum(res: any): void {
    this.album = res;
  }
}
