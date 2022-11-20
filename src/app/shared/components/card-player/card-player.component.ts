import {Component, Input, OnInit} from '@angular/core';
import {TracksModel} from "@core/models/tracks.model";
import {MultimediaService} from "@shared/services/multimedia.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TracksModel = { _id: 0, name: 'Hey', album: '', url: '', cover: ''};

  constructor(private multimediaService : MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TracksModel) : void {
    this.multimediaService.trackIngo$.next(track)
  }
}
