import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor() {
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/']
      },
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your Library',
        icon: 'uil-chart',
        router: ['/', 'favorites']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Create Playlist',
        icon: 'uil-plus-square'
      },
      {
        name: 'Liked Songs',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Music 1',
        router: ['/']
      },
      {
        name: 'Music 2',
        router: ['/']
      },
      {
        name: 'Music 3',
        router: ['/']
      },
      {
        name: 'Music 4',
        router: ['/']
      },
    ]
  }

}
