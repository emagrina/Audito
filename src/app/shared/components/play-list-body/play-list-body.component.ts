import {Component, Input, OnInit} from '@angular/core';
import {TracksModel} from "@core/models/tracks.model";
import  * as dataRaw from '../../../data/tracks.json'

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
    const  { data }: any = (dataRaw as any).default
    this.tracks = data
  }

  changeSort(property: string): void {
    const {order} = this.optionSort
    this.optionSort = {
      property:property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
