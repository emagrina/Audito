import {Component, Input, OnInit} from '@angular/core';
import {TracksModel} from "@core/models/tracks.model";

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TracksModel> = []
  optionSort:  {property: string | null, order: string} = {property: null, order: 'asc'}

  constructor() { }

  ngOnInit(): void {

  }

  changeSort(property: string): void {
    const {order} = this.optionSort
    this.optionSort = {
      property:property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
