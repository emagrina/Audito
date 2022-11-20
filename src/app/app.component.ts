import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Audito';

  constructor() {
      console.log('%cLinkedin: https://www.linkedin.com/in/emagrina', 'color: white; background-color: #0A66C267; padding: 1em 2em; margin: 1em; font-size: 20px; border-radius: 15px;')
      console.log('%cGitHub: https://github.com/emagrina/Audito', 'color: white; background-color: #0E111679; padding: 1em 4.5em 1em 2em; margin: 1em; font-size: 20px; border-radius: 15px;')
  }
}
