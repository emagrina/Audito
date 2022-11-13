import {Component, OnDestroy, OnInit} from '@angular/core';
import {TracksModel} from "@core/models/tracks.model";
import {MultimediaService} from "@shared/services/multimedia.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TracksModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27387d58184d2ed14ebf1639bd0',
    name: 'Stuck!',
    album: 'PHONK 😈 VILLAN',
    url: 'https://localhost/track.mp3',
    _id: 'ab67616d0000b27387d58184d2'
  }

  listObservers$: Array<Subscription> = [];
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TracksModel) => {

      }
    )
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
