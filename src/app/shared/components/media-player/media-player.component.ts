import { Component, OnInit } from '@angular/core';
import {TracksModel} from "@core/models/tracks.model";

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TracksModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27387d58184d2ed14ebf1639bd0',
    name: 'Stuck!',
    album: 'PHONK 😈 VILLAN',
    url: 'https://localhost/track.mp3',
    _id: 'ab67616d0000b27387d58184d2'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
