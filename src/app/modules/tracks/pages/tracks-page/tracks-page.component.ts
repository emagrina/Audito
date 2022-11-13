import {Component, OnDestroy, OnInit} from '@angular/core';
import {TracksModel} from "@core/models/tracks.model";
import {TrackService} from "@modules/tracks/services/track.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TracksModel> = [];
  tracksRandom: Array<TracksModel> = [];

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  loadDataAll(): void {
    this.trackService.getAllTracks$().subscribe(
      (response: TracksModel[]) => {
        this.tracksTrending = response
      }, err => {
        console.log(err)
      });
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe(
      (response: TracksModel[]) => {
        this.tracksRandom = response
      }, err => {
        console.log(err)
      });
  }

  ngOnDestroy(): void {

  }
}
