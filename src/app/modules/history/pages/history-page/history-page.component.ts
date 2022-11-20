import { Component, OnInit } from '@angular/core';
import {SearchService} from "@modules/history/services/search.service";
import {TracksModel} from "@core/models/tracks.model";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([]);
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  reciveData(event: string): void {
    this.listResults$ = this.searchService.searchTracks$(event)
  }
}
