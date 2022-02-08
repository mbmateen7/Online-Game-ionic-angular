import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  sound = new Howl({
    src: ['assets/music/PicPlayceMainMenuMusic.wav']
  });

  constructor() { }


  playSound() {

    this.sound.play();
  }

  stopSound() {

    this.sound.pause();
  }
}
