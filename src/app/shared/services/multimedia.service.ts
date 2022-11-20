import {EventEmitter, Injectable} from '@angular/core';
import {TracksModel} from '@core/models/tracks.model';
import {BehaviorSubject, min} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  public trackIngo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement
  public timeEleapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() {

    this.audio = new Audio();
    this.trackIngo$.subscribe((responseOK) => {
      if (responseOK) {
        this.setAudio(responseOK)
      }
    })

    this.listenAllEvents()
  }

  public listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage:number): void {
    const { duration } = this.audio
    const percentageToSeconds = (percentage * duration) / 100

    this.audio.currentTime = percentageToSeconds
  }

  private calculateTime = () => {
    const {duration, currentTime} = this.audio
    this.setTimeElapsed(currentTime)
    this.setRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setAudio(track: TracksModel): void {
    this.audio.src = environment.apiBaseUrl + track.url.slice(1);
    this.audio.play();
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    // TODO 00:00 --> 01:03 --> 01:30
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`

    this.timeEleapsed$.next(displayFormat)
  }

  private setRemaining(currentTime: number, duration: number) {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`

    this.timeRemaining$.next(displayFormat)
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }
  }

  private setPercentage(currentTime: number, duration: number): void {
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

}
