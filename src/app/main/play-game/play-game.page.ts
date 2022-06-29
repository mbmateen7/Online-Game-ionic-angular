import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { FormGroup, FormBuilder, FormArray, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import * as $ from 'jquery';
import { RestService } from 'src/app/service/rest.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

import { Validators } from '@angular/forms';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.page.html',
  styleUrls: ['./play-game.page.scss'],
})
export class PlayGamePage implements OnInit {

  currentInput: number = 0;
  cameraImage: string;
  originalImage: string;

  changedValues = [];

  tl;

  tr;

  bl;

  br;

  removePrimaryItem;

  removeSecondaryItem;

  addTurnItem = 0;

  revealItem = 0;
  userId;

  isPuzzleSolved = false;

  gameType = 'easy';

  canvasArray = [1, 2, 3, 4];

  sequence = ['toHide', 'toHide1', 'toHide2', 'toHide3'];

  // sequenceUpdated = ['toHide', 'toHide1', 'toHide2', 'toHide3'];

  rotations = {
    toHide: 4,
    toHide1: 4,
    toHide2: 4,
    toHide3: 4,
  };


  puzzleword;

  hintWord = new FormControl('', Validators.required);

  gameObj;

  lettersArr = new FormArray([]);

  puzzleWordCount = 10;

  filterList = []

  cameraImageThumbnail;

  ownedItemsList = []

  primaryFilter;

  isLoading: boolean = true;

  selection = "primary";

  buttons = "default";

  lastValue = 0;

  secondaryFilterSelected

  secondaryValues = {
    numbers: {
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      sepia: 0,
      saturate: 100,
      opacity: 100,
      brightness: 100,
      contrast: 100,
      blur: 0,
    },
    ranges: {
      grayscale: {
        min: 0,
        max: 100,
        step: 1,
        sliderValue: 0,
      },
      hue_rotate: {
        min: 0,
        max: 180,
        step: 1,
        sliderValue: 0,
      },
      invert: {
        min: 0,
        max: 90,
        step: 30,
      },
      sepia: {
        min: 0,
        max: 100,
        step: 1,
        sliderValue: 0,
      },
      saturate: {
        min: 0,
        max: 200,
        step: 1,
        sliderValue: 0,
      },
      opacity: {
        min: 50,
        max: 100,
        step: 1,
        sliderValue: 0,
      },
      brightness: {
        min: 50,
        max: 200,
        step: 1,
        sliderValue: 0,
      },
      contrast: {
        min: 50,
        max: 200,
        step: 1,
        sliderValue: 0,
      },
      blur: {
        min: 0,
        max: 5,
        step: 1,
        sliderValue: 0,
      },
    },
  };

  normalSecondaryValues = {
    numbers: {
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      sepia: 0,
      saturate: 100,
      opacity: 100,
      brightness: 100,
      contrast: 100,
      blur: 0,
    },
    ranges: {
      grayscale: {
        min: 0,
        max: 100,
        step: 1,
        sliderValue: 0,
      },
      hue_rotate: {
        min: 0,
        max: 180,
        step: 1,
        sliderValue: 0,
      },
      invert: {
        min: 0,
        max: 90,
        step: 30,
      },
      sepia: {
        min: 0,
        max: 100,
        step: 1,
        sliderValue: 0,
      },
      saturate: {
        min: 0,
        max: 200,
        step: 1,
        sliderValue: 0,
      },
      opacity: {
        min: 50,
        max: 100,
        step: 1,
        sliderValue: 0,
      },
      brightness: {
        min: 50,
        max: 200,
        step: 1,
        sliderValue: 0,
      },
      contrast: {
        min: 50,
        max: 200,
        step: 1,
        sliderValue: 0,
      },
      blur: {
        min: 0,
        max: 5,
        step: 1,
        sliderValue: 0,
      },
    },
  };

  imageWidth;

  showLives;

  played = [];

  geusses = [];

  timestamp;

  lives;

  countWord = 10;

  primayFilterRemovalList = [];

  secondaryFilterRemovalList = [];

  addTurn = [];

  revealList = [];

  revealCount = 0;

  checkGameStatus: any;

  constructor(
    private route: ActivatedRoute,
    private dragulaService: DragulaService,
    private restService: RestService,
    public loadingController: LoadingController,
    private router: Router,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private alertController: AlertController,
    private changeDetection: ChangeDetectorRef,
    private spinnerDialog: SpinnerDialog,
  ) {

    // this.router.events.subscribe((event) => console.log(event))

    this.dragulaService
      .drop('totalPiece')
      .subscribe(({
        name,
        el,
        target,
        source,
        sibling
      }) => {
        const targetIndex = this.sequence.indexOf(
          target.className.split(' ')[0]
        );
        const sourceIndex = this.sequence.indexOf(
          source.className.split(' ')[0]
        );
        this.sequence[targetIndex] = source.className.split(' ')[0];
        this.sequence[sourceIndex] = target.className.split(' ')[0];
        console.log('finalSequence', this.sequence);
        const swappee = $(target).find('canvas').not(el);
        swappee.appendTo(source);
        let temp = source.className;
        source.className = target.className;
        target.className = temp;
        this.checkGameWin();
        this.autoSwap();
      });
  }

  ngOnInit() {
    let THIS = this;

    this.getOwnedItemList();

    this.lettersArr = new FormArray([]);

    this.userId = this.route.snapshot.paramMap.get('userId');
    this.gameObj = this.route.snapshot.paramMap.get('game');
    this.gameObj = JSON.parse(this.gameObj);
    this.restService.postRequest('filter/get-filter-by-id', { filter_id: this.gameObj.filter_id }).subscribe((res: any) => {
      if (res.filter.length) {
        this.primaryFilter = res.filter[0].name
      }
    })

    if (this.gameObj.status == 1) {
      this.cameraImage = this.gameObj.image;
    }
    if (this.gameObj.status == 0) {
      this.cameraImage = this.gameObj.p_image;
    }
    this.sequence = JSON.parse(this.gameObj.swap_sequence);

    this.rotations = JSON.parse(this.gameObj.rotate_sequence);

    let secondaryVal = JSON.parse(this.gameObj.secondary_values);

    this.secondaryValues.numbers.blur = secondaryVal.numbers.blur;
    this.secondaryValues.numbers.grayscale = secondaryVal.numbers.grayscale;
    this.secondaryValues.numbers.hue_rotate = secondaryVal.numbers.hue_rotate;
    this.secondaryValues.numbers.invert = secondaryVal.numbers.invert;
    this.secondaryValues.numbers.sepia = secondaryVal.numbers.sepia;
    this.secondaryValues.numbers.saturate = secondaryVal.numbers.saturate;
    this.secondaryValues.numbers.opacity = secondaryVal.numbers.opacity;
    this.secondaryValues.numbers.brightness = secondaryVal.numbers.brightness;
    this.secondaryValues.numbers.contrast = secondaryVal.numbers.contrast;


    this.tl = this.sequence[0];
    this.tr = this.sequence[1];
    this.bl = this.sequence[2];
    this.br = this.sequence[3];

    let word = this.gameObj.word.split('');

    for (let i = 0; i < word.length; i++) {
      this.makeFormGroup(word);
    }

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var list;


    var buttons = function () {
      let myButtons = document.getElementById('buttons');

      let letters = document.createElement('ul');

      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        letters.classList.add('alphabet');
        list = document.createElement('li');
        list.id = 'letter' + i;
        list.innerHTML = alphabet[i];

        list.style.border = '1px solid black';
        list.style.minWidth = '10vw';
        list.style.minHeight = '10vw';
        list.style.marginRight = '3vw';

        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
        if (alphabet[i] == 'm') {
          letters.appendChild(document.createElement('br'));
          letters.appendChild(document.createElement('br'));
        }
      }
    };

    let check = function () {
      list.onclick = function () {
        btnUpdate(this);
      }
    };

    buttons()

    function btnUpdate(that) {
      // console.log('this.lettersArr', THIS.lettersArr);
      if (THIS.countWord) {
        THIS.countWord--;
        that.setAttribute("class", "active");
        for (let index = 0; index < THIS.gameObj.word.length; index++) {
          if (THIS.gameObj.word[index].toLowerCase() == that.innerHTML.toLowerCase()) {
            THIS.lettersArr.controls[index].setValue(that.innerHTML)
          }
          if (THIS.lettersArr.status == 'VALID') {


            let str = THIS.lettersArr.value.toString().replace(/,/g, '').toLowerCase();
            if (str == THIS.gameObj.word.toLowerCase()) {
              const gameResult = {
                game_id: THIS.gameObj.id,
                status: 2
              };
              THIS.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                if (res) {

                  $('#originalImage').css('display', 'block');
                  $('#canvas-grid').css('display', 'none');
                }
              })
              Swal.fire({
                title: '<div><img src="assets/icon/won.png" style="width: 20vw; height:20vw;"><br><h5>You Won!</h5></div>',
                text: "It's your turn! Would you like to send a game back?",
                confirmButtonText: 'Send',
                confirmButtonColor: '#99C43C',
                showCancelButton: true, allowOutsideClick: true,
                // backdrop: true,
                cancelButtonColor: '#E86B5D',
                cancelButtonText: "Cancel"
              }).then((result) => {
                console.log('--->', result);

                if (result.isConfirmed) {
                  THIS.router.navigate(['contactlist', { friend_id: THIS.gameObj.user_id }], { replaceUrl: true })
                  // window.location.reload();
                  // console.log('Game Object', THIS.gameObj);

                } else { 
                  THIS.navCtrl.setDirection('root');
                  THIS.router.navigate(['main'], { replaceUrl: true }) 
                }
              });
            }

            if (str != THIS.gameObj.word.toLowerCase()) {
              Swal.fire({
                title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>You lost!</h5></div>',
                html: "The correct answer was: " + THIS.gameObj.word + "<br>It's your turn! Would you like to send a game back?",
                confirmButtonText: 'Send',
                confirmButtonColor: '#99C43C',
                showCancelButton: true, allowOutsideClick: true,
                // backdrop: true,
                cancelButtonColor: '#E86B5D',
                cancelButtonText: "Cancel"
              }).then((result) => {
                const gameResult = {
                  game_id: THIS.gameObj.id,
                  status: 3
                };

                THIS.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                  if (res) {
                    THIS.getUserData();

                  }
                });

                if (result.isConfirmed) {
                  THIS.router.navigate(['contactlist', { friend_id: THIS.gameObj.user_id }], { replaceUrl: true })
                }
                else {
                  THIS.navCtrl.setDirection('root');
                  THIS.router.navigate(['main', { gameSent: true }], { replaceUrl: true })
                }

              });
            }
          }

        };
      }

      else {
        Swal.fire({
          title: '<div><img src="assets/icon/notice.png" style="width: 20vw; height:20vw;"><br><h5>Oh no!</h5></div>',
          text: 'You dont have extra turn. Do you want to go to store and buy from there?',
          confirmButtonText: 'Yes',
          confirmButtonColor: '#99C43C',
          showCancelButton: true, allowOutsideClick: true,
          // backdrop: true,
          cancelButtonColor: '#E86B5D',
          cancelButtonText: "No"
        }).then(result => {
          if (result.isConfirmed) {

          }
          if (!result.isConfirmed) {
            Swal.fire({
              title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>You lost!</h5></div>',
              html: "The correct answer was: " + THIS.gameObj.word + "<br>It's your turn! Would you like to send a game back?",
              confirmButtonText: 'Send',
              confirmButtonColor: '#99C43C',
              showCancelButton: true, allowOutsideClick: true,
              // backdrop: true,
              cancelButtonColor: '#E86B5D',
              cancelButtonText: "Cancel"
            }).then((result) => {
              const gameResult = {
                game_id: THIS.gameObj.id,
                status: 3
              };

              THIS.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                if (res) {
                  THIS.getUserData();

                }
              });
              if (result.isConfirmed) {
                THIS.router.navigate(['contactlist', { friend_id: THIS.gameObj.user_id }], { replaceUrl: true })
              }
              else {
                THIS.navCtrl.setDirection('root');
                THIS.router.navigate(['main', { gameSent: true }], { replaceUrl: true })
              }
              // if (result.value) {
              //   THIS.router.navigate(['main/store', { replceUrl: true }])

              // } else {
              //   THIS.router.navigate(['main', { replceUrl: true }])
              // }
            });
          }
          // console.log('This is result', result);

        })
      }

    }

  }

  async presentAlert(header, body) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: body,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateBack('main')
          }
        }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertForShop(header, body, paramObj) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: body,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['main/store', { params: JSON.stringify(paramObj) }])
          }
        },
        {
          text: 'No',
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }




  Rotate(index, c) {
    this.rotations[c]++;
    var canvas: any = <HTMLCanvasElement>document.getElementById('canvas' + index),
      context: any = canvas.getContext('2d'),
      pictureWidth = canvas.width,
      pictureHeight = canvas.height;


    pictureWidth = (pictureWidth) * 2;
    pictureHeight = (pictureHeight) * 2;

    context.save();
    context.translate(pictureWidth / 4, pictureHeight / 4);
    context.rotate(Math.PI / 2);
    context.drawImage(canvas, -pictureWidth / 4, -pictureHeight / 4, pictureWidth / 2, pictureHeight / 2);
    context.restore();
    // this.audioService.play('rotatingTile');
    this.checkGameWin();
  }


  Crop() {
    if (!this.isPuzzleSolved && this.gameObj.status == 0) {
      console.log('Game Obj', this.gameObj)
      let originalImage = $("#originalImage");
      let self = this;
      let pictureWidth;
      let pictureHeight;
      let newImage = new Image();
      newImage.src = this.cameraImage;
      newImage.width = originalImage.width();
      console.log('Width', newImage.width);
      newImage.height = originalImage.width();
      //this.imageWidth = originalImage.width();
      newImage.onload = function () {
        pictureWidth = originalImage.width();
        pictureHeight = originalImage.width();
        var w2 = pictureWidth / 2,
          h2 = pictureHeight / 2,
          parts = [];
        for (var i = 0; i < 4; i++) {
          var count = i + 1;
          var canvas: any = <HTMLCanvasElement>(
            document.getElementById("canvas" + count)
          ),
            ctx: any = canvas.getContext("2d");
          var x = (-w2 * i) % (w2 * 2),
            y = h2 * i <= h2 ? 0 : -h2;
          canvas.width = w2;
          canvas.height = h2;
          if (i == 3) {
            self.imageWidth = canvas.width + canvas.width;
          }
          ctx.drawImage(newImage, x, y, w2 * 2, h2 * 2);
        }

      }; //end of onload function

      $('#originalImage').css('display', 'none');
      $('#gamewindiv').css('display', 'none');
      // this.checkGameStatus = setInterval( () => {
      //   console.log(this.gameObj);
        
      //   if(this.gameObj.status == 0) {
      //     $('#originalImage').css('display', 'none');
      //   }else {
      //     clearInterval(this.checkGameStatus);
      //   }
      // },50);
    } else {
      $('#originalImage').css('display', 'show');
      $('#gamewindiv').css('display', 'block');
    }
  }

  Crop1() {
    if (!this.isPuzzleSolved && this.gameObj.status == 0) {
      console.log('Game Obj', this.gameObj)
      let originalImage = $("#originalImage1");

      let self = this;
      let pictureWidth;
      let pictureHeight;
      let newImage = new Image();
      newImage.src = this.cameraImage;
      var oWidth = newImage.width;
      var oHeight = newImage.height;
      // newImage.width = oWidth - 10;
      // newImage.height = oHeight - 10;
      // newImage.width = originalImage.width();
      // newImage.height = originalImage.height();
      //this.imageWidth = originalImage.width();
      newImage.onload = function () {
        pictureWidth = oWidth;
        pictureHeight = oHeight;

        var gridSize = 3;

        //   var marginValueW = (oWidth / gridSize) - 200;
        //   var marginValueH = (oHeight / gridSize) - 200;


        var w2 = pictureWidth / gridSize,
          h2 = pictureHeight / gridSize,
          parts = [];


        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            let cnvs = "canvas" + ((j + 1) + (i * gridSize));
            var canvas: any = <HTMLCanvasElement>document.getElementById(cnvs);
            var ctx: any = canvas.getContext("2d");

            ctx.drawImage(newImage, (w2 * j), (h2 * i), w2, h2, 0, 0, canvas.width, canvas.height);
          }
        }


      };

      $('#originalImage').css('display', 'none');
      $('#gamewindiv').css('display', 'none');
    } else {
      $('#originalImage').css('display', 'show');
      $('#gamewindiv').css('display', 'block');
    }
  }

  makeFormGroup(arr) {
    return this.lettersArr.push(new FormControl('', Validators.required))
  }

  autoSwap() {
    const children = $('.toHide').children('canvas');
    let childrenCount = 0;
    const children1 = $('.toHide1').children('canvas');
    let children1Count = 0;
    const children2 = $('.toHide2').children('canvas');
    let children2Count = 0;
    const children3 = $('.toHide3').children('canvas');
    let children3Count = 0;
    children.each(function () {
      const id = $(this).attr('id');
      childrenCount++;
    });
    // console.log('check this count ', childrenCount);
    children1.each(function () {
      const id = $(this).attr('id');
      children1Count++;
    });
    // console.log('check this count ', children1Count);
    children2.each(function () {
      const id = $(this).attr('id');
      children2Count++;
    });
    // console.log('check this count ', children2Count);
    children3.each(function () {
      const id = $(this).attr('id');
      children3Count++;
    });
    // console.log('check this count ', children3Count);
    console.log('check this final sequence', this.sequence);
    let swapIn;
    let swapOut: Element;
    if (childrenCount == 0) {
      swapIn = $('.toHide');
    }
    if (children1Count == 0) {
      swapIn = $('.toHide1');
    }
    if (children2Count == 0) {
      swapIn = $('.toHide2');
    }
    if (children3Count == 0) {
      swapIn = $('.toHide3');
    }

    if (childrenCount == 2) {
      swapOut = children;
    }
    if (children1Count == 2) {
      swapOut = children1;
    }
    if (children2Count == 2) {
      swapOut = children2;
    }
    if (children3Count == 2) {
      swapOut = children3;
    }
    if (swapIn && swapOut) {
      swapIn.append(swapOut[0]);
      // console.log('swapping');
    }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
    });
    await loading.present();
  }

  checkGameWin() {
    console.log('Gameee win ', this.gameObj);

    const gameResult = {
      game_id: this.gameObj.id,
      status: 1
    };

    if (this.gameObj.type == 'easy') {

      if (this.rotations['toHide'] % 4 === 0 &&
        this.rotations['toHide1'] % 4 === 0 &&
        this.rotations['toHide2'] % 4 === 0 &&
        this.rotations['toHide3'] % 4 === 0 && !this.isPuzzleSolved) {

        if (this.sequence[0] === 'toHide' &&
          this.sequence[1] === 'toHide1' &&
          this.sequence[2] === 'toHide2' &&
          this.sequence[3] === 'toHide3') {
          this.isPuzzleSolved = true;

          this.gameObj.status = 1
          this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
            if (res) {
              this.getUserData();

            }
          });

          Swal.fire({
            title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>You Solved Puzzle!</h5></div>',
            text: 'You got 50 exp and 3 Puzzle Pieces!',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#99C43C',
          }).then(result => {
            // this.router.navigate(['/main', { gameSent: true }], { replaceUrl: true, });
            $('#originalImage').css('display', 'block');
            $('#canvas-grid').css('display', 'none');
          });
        }
      }
    }

    if (this.gameObj.type == 'medium') {

      console.log(this.sequence);
      console.log(this.rotations);

      if ((this.rotations['toHide'] % 4 === 0 &&
        this.rotations['toHide1'] % 4 === 0 &&
        this.rotations['toHide2'] % 4 === 0 &&
        this.rotations['toHide3'] % 4 === 0 &&
        this.rotations['toHide4'] % 4 === 0 &&
        this.rotations['toHide5'] % 4 === 0 &&
        this.rotations['toHide5'] % 4 === 0 &&
        this.rotations['toHide5'] % 4 === 0 &&
        this.rotations['toHide5'] % 4 === 0 &&
        this.rotations['toHide5'] % 4 === 0 &&
        this.rotations['toHide5'] % 4 === 0) && !this.isPuzzleSolved
      ) {
        if (this.sequence[0] === 'toHide' &&
          this.sequence[1] === 'toHide1' &&
          this.sequence[2] === 'toHide2' &&
          this.sequence[3] === 'toHide3' &&
          this.sequence[4] === 'toHide4' &&
          this.sequence[5] === 'toHide5' &&
          this.sequence[6] === 'toHide6' &&
          this.sequence[7] === 'toHide7' &&
          this.sequence[8] === 'toHide8') {
          this.isPuzzleSolved = true;

          this.gameObj.status = 1
          this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
            if (res) {
              this.getUserData();

            }
          });

          Swal.fire({
            title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>You Solved Puzzle!</h5></div>',
            text: 'You got 50 exp and 3 Puzzle Pieces!',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#99C43C',
          }).then(result => {
            // this.router.navigate(['/main', { gameSent: true }], { replaceUrl: true, });
            $('#originalImage').css('display', 'block');
            $('#canvas-grid').css('display', 'none');
          });
        }
      }
    }
  }

  nextInputFocus(index: number, event) {

    console.log('event', event.innerHTML);
    if (this.puzzleWordCount) {
      this.puzzleWordCount--;
      if (event.innerHTML != 'backSpace') {
        this.currentInput = index + 1;
        $('#puzzle-word-' + (index + 1)).focus();
      }
      // console.log(event.keyCode);
      if (event.innerHTML == 'backSpace') {
        this.currentInput = index - 1;
        $('#puzzle-word-' + (index - 1)).focus();
        $('#puzzle-word-' + (index - 1)).val('');
      }
      const gameResult = {
        game_id: this.gameObj.id,
        status: 2
      };

      if (this.lettersArr.controls.length == index + 1) {
        let str = this.lettersArr.value.toString().replace(/,/g, '').toLowerCase()
        if (str == this.gameObj.word.toLowerCase()) {
          this.presentAlert('Congratulations', 'youwin')
          // this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
          //   if (res) {
          //     $('#originalImage').css('display', 'block');
          //     $('#canvas-grid').css('display', 'none');
          //   }
          // })
        }
      }
    } else {
      const gameResult = {
        game_id: this.gameObj.id,
        status: 3
      };
      // this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
      //   if (res) {
      //     $('#originalImage').css('display', 'block');
      //     $('#canvas-grid').css('display', 'none');
      //   }
      // })
      this.presentAlert('Sorry', 'youlost')
    }
  }

  checkOwnedFilter(filter) {
    console.log(this.ownedItemsList.find(x => x.filter_id == filter.id));
    return this.ownedItemsList.find(x => x.filter_id == filter.id);
    // !ownedItemsList[0].includes(filter.id)
  }

  segmentChanged(ev: any) {
    //alert(ev.value);
    this.selection = ev;
    this.changeDetection.detectChanges();
  }

  revertButtons(cancel = "no") {
    if (cancel == "cancel") {
      this.secondaryValues.ranges[this.secondaryFilterSelected].sliderValue =
        this.lastValue;
      this.secondaryValues.numbers[this.secondaryFilterSelected] =
        this.lastValue;
    }
    this.buttons = "default";
  }

  getOwnedItemList() {
    this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
      this.ownedItemsList = res.message;
      this.primayFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 3);
      this.secondaryFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 4);
      this.addTurn = this.ownedItemsList.filter(x => x.shop_id == 5);
      this.revealList = this.ownedItemsList.filter(x => x.shop_id == 6);
    })
  }



  hideKeyboard(event) {
    return false;
  }

  focusInput(event) {
    event.preventDefault();
    return false;
  }

  onremovalPrimaryFilter() {
    if (!this.primaryFilter.length) {
      Swal.fire({
        title: 'Alert',
        text: 'There are no filters to remove.',
        confirmButtonText: 'OK'
      })
      return
    }
    if (this.primayFilterRemovalList.length > 0) {
      this.itemUsageConsentDialog('RemovePrimary', 'It will remove the primary filter from puzzle').then((res: any) => {
        if (res.isConfirmed) {
          this.primaryFilter = '';
          this.primayFilterRemovalList.shift();
          this.restService.postRequestToken('shop/update-item', { user_shop_id: this.primayFilterRemovalList[0].id }).subscribe((res: any) => {
            if (res.status) {
              Swal.fire({
                title: 'Success',
                text: 'You have Consumed Primary Filter',
                confirmButtonText: 'OK'
              })
            }
          })
        }
      }).catch(err => {
        console.log('Error', err);

      })

    }
    else {
      Swal.fire({
        title: 'Do you want to purchase primary removal Filter?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Not`,
      }).then(res => {
        if (res.isConfirmed) {
          this.router.navigate(['main/store'], { replaceUrl: true })
        }

      })
    }
  }

  onremovalSecondaryFilter() {
    if (!this.secondaryFilterRemovalList.length) {
      Swal.fire({
        title: 'Alert',
        text: 'There are no filters to remove.',
        confirmButtonText: 'OK'
      })
      return
    }
    if (this.secondaryFilterRemovalList.length > 0) {
      this.itemUsageConsentDialog('RemoveSecondary', 'It will remove the secondary filter from the puzzle').then(res => {
        console.log('Responsee', res);
      }).catch(err => {
        console.log('Error', err);

      })
      this.secondaryValues = this.normalSecondaryValues;
      this.secondaryFilterRemovalList.shift();
      this.restService.postRequestToken('shop/update-item', { user_shop_id: this.secondaryFilterRemovalList[0].id }).subscribe(res => {
        console.log('====>', res);
      })
    }
    else {
      Swal.fire({
        title: 'Do you want to purchase secondary removal Filter?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Not`,
      }).then(res => {
        if (res.isConfirmed) {
          this.router.navigate(['main/store'], { replaceUrl: true })
        }

      })
    }
  }

  onApplyingAddTurn() {
    if (this.addTurn.length) {
      this.itemUsageConsentDialog('AddTurn', 'It will add an extra guess').then((res: any) => {
        if (res.isConfirmed) {
          this.countWord++
          this.restService.postRequestToken('shop/update-item', { user_shop_id: this.addTurn[0].id }).subscribe(res => {
            this.addTurn.shift()

          })
        }
      }).catch(err => {
        console.log('This is error of extra guess', err);
      })
    } else {
      Swal.fire({
        title: '<div><img src="assets/icon/notice.png" style="width: 20vw; height:20vw;"><br><h5>Oh no!</h5></div>',
        text: 'You dont have extra AddTurn. Do you want to go to store and buy from there?',
        confirmButtonText: 'Yes',
        confirmButtonColor: '#99C43C',
        showCancelButton: true, allowOutsideClick: true,
        // backdrop: true,
        cancelButtonColor: '#E86B5D',
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['main/store'], { replaceUrl: true })
        }

      });
    }

  }

  onApplyingReveal() {
    if (this.revealList.length) {
      this.itemUsageConsentDialog('Reveal', 'It will reveal a letter').then((res: any) => {
        if (res.isConfirmed) {
          this.revealCount++;
          for (let i = 0; i < this.revealCount; i++) {
            this.lettersArr.controls[i].setValue(this.gameObj.word[i])
          }
          this.restService.postRequestToken('shop/update-item', { user_shop_id: this.revealList[0].id }).subscribe(res => {
            if (res) {
              this.revealList.shift();
            }
          })

        }
      }).catch(err => {
        console.log('This is error of applying reveal', err);
      })
    } else {
      Swal.fire({
        title: '<div><img src="assets/icon/notice.png" style="width: 20vw; height:20vw;"><br><h5>Oh no!</h5></div>',
        text: 'You dont have extra reveal. Do you want to go to store and buy from there?',
        confirmButtonText: 'Yes',
        confirmButtonColor: '#99C43C',
        showCancelButton: true, allowOutsideClick: true,
        // backdrop: true,
        cancelButtonColor: '#E86B5D',
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['main/store'], { replaceUrl: true })
        }
      });
    }
  }

  itemUsageConsentDialog(item, itemdesc) {
    return new Promise(((resolve, reject) => {
      Swal.fire({
        title: '<div><img src="assets/icon/questionmark.png" style="width: 20vw; height:20vw;">',
        text: 'Are you sure you want to use ' + item + '? ' + itemdesc + '.',
        confirmButtonText: 'Yes',
        confirmButtonColor: '#99C43C',
        showCancelButton: true, allowOutsideClick: true,
        // backdrop: true,
        cancelButtonColor: '#E86B5D',
        cancelButtonText: "No"
      }).then((result) => {
        console.log('consent result1', result);
        if (result.value) {
          resolve(result);
        } else {
          reject(false);
        }
      }).catch(res => {
        console.log('consent result', res);
        reject(res);
      });
    }))
  }


  getUserData() {
    this.restService.getRequest('users/detail').subscribe((res: any) => {
      if (res.token) {
        // this.user = res.data[0];
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.data[0]));
      }
    })
  }

  autoSwap1() {
    const children = $('.toHide').children('canvas');
    let childrenCount = 0;
    const children1 = $('.toHide1').children('canvas');
    let children1Count = 0;
    const children2 = $('.toHide2').children('canvas');
    let children2Count = 0;
    const children3 = $('.toHide3').children('canvas');
    let children3Count = 0;
    const children4 = $('.toHide4').children('canvas');
    let children4Count = 0;
    const children5 = $('.toHide5').children('canvas');
    let children5Count = 0;
    const children6 = $('.toHide6').children('canvas');
    let children6Count = 0;
    const children7 = $('.toHide7').children('canvas');
    let children7Count = 0;
    const children8 = $('.toHide8').children('canvas');
    let children8Count = 0;
    children.each(function () {
      const id = $(this).attr('id');
      childrenCount++;
    });
    // console.log('check this count ', childrenCount);
    children1.each(function () {
      const id = $(this).attr('id');
      children1Count++;
    });
    // console.log('check this count ', children1Count);
    children2.each(function () {
      const id = $(this).attr('id');
      children2Count++;
    });
    // console.log('check this count ', children2Count);
    children3.each(function () {
      const id = $(this).attr('id');
      children3Count++;
    });
    // console.log('check this count ', children3Count);

    children4.each(function () {
      const id = $(this).attr('id');
      children4Count++;
    });
    // console.log('check this count ', children3Count);
    children5.each(function () {
      const id = $(this).attr('id');
      children5Count++;
    });
    // console.log('check this count ', children3Count);
    children6.each(function () {
      const id = $(this).attr('id');
      children6Count++;
    });
    // console.log('check this count ', children3Count);
    children7.each(function () {
      const id = $(this).attr('id');
      children7Count++;
    });
    // console.log('check this count ', children3Count);
    children8.each(function () {
      const id = $(this).attr('id');
      children8Count++;
    });
    // console.log('check this count ', children3Count);
    // console.log('check this final sequence', this.sequence1);
    let swapIn;
    let swapOut: Element;
    if (childrenCount == 0) {
      swapIn = $('.toHide');
    }
    if (children1Count == 0) {
      swapIn = $('.toHide1');
    }
    if (children2Count == 0) {
      swapIn = $('.toHide2');
    }
    if (children3Count == 0) {
      swapIn = $('.toHide3');
    }

    if (childrenCount == 2) {
      swapOut = children;
    }
    if (children1Count == 2) {
      swapOut = children1;
    }
    if (children2Count == 2) {
      swapOut = children2;
    }
    if (children3Count == 2) {
      swapOut = children3;
    }
    if (swapIn && swapOut) {
      swapIn.append(swapOut[0]);
      // console.log('swapping');
    }
  }

}
