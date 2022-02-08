import { Component, OnInit, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import * as $ from "jquery";
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl } from "@angular/forms";
import { DragulaService } from 'ng2-dragula';
import { Validators } from '@angular/forms';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
  viewProviders: [DragulaService],

})
export class FilterPage implements OnInit {

  filterList: any;
  secondaryFilterList: any;
  ownedItemsList: any;
  isLoading: boolean = true;
  filter_id = null;
  gameType;
  gameObj;
  sequence = ["toHide", "toHide1", "toHide2", "toHide3"];
  sequence1 = [
    "toHide",
    "toHide1",
    "toHide2",
    "toHide3",
    "toHide4",
    "toHide5",
    "toHide6",
    "toHide7",
    "toHide8",
  ];
  rotations = {
    toHide: 4,
    toHide1: 4,
    toHide2: 4,
    toHide3: 4,
  };
  rotations1 = {
    toHide: 4,
    toHide1: 4,
    toHide2: 4,
    toHide3: 4,
    toHide4: 4,
    toHide5: 4,
    toHide6: 4,
    toHide7: 4,
    toHide8: 4,
  };
  cameraImage = null;
  cameraImageThumbnail;
  isPuzzleSolved = false;
  primaryFilter = "";
  buttons = "default";
  selection = "primary";
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
  secondaryFilterValues = [
    "grayscale(100%)",
    "hue-rotate(180deg)",
    "invert(90%)",
    "sepia(100%)",
    "saturate(200%)",
    "opacity(50%)",
    "brightness(200%)",
    "contrast(200%)",
    "blur(5px)",
  ];
  secondaryFilterSelected;
  lastValue = 0;
  lettersArr = new FormArray([]);
  userId;
  type = 'easy';
  imageWidth;
  imageHeight;
  hintWord = new FormControl('', Validators.required);
  showWordSection = false;
  proSecondaryFilters = [
    "grayscale",
    "hue_rotate",
    "invert",
    "sepia",
    "saturate",
  ];
  dragula: any;
  primeSecondaryFilters = ["opacity", "brightness", "contrast", "blur"];
  user;
  sendGameLoader = false;
  hideImage = false;


  constructor(private restService: RestService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private router: Router,
    private changeDetection: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dragulaService: DragulaService,
    public loadingController: LoadingController,
    private spinnerDialog: SpinnerDialog,
    private userService: UserService
  ) {


    this.dragulaService
      .drop('totalPiece')
      .subscribe(({
        name,
        el,
        target,
        source,
        sibling
      }) => {

        if (this.gameType == 'easy') {
          const targetIndex = this.sequence.indexOf(target.className.split(' ')[0]);
          const sourceIndex = this.sequence.indexOf(source.className.split(' ')[0]);
          this.sequence[targetIndex] = source.className.split(' ')[0];
          this.sequence[sourceIndex] = target.className.split(' ')[0];
          console.log("finalSequence ", this.sequence);
          const swappee = $(target).find('canvas').not(el);
          swappee.appendTo(source);
          let temp = source.className;
          source.className = target.className;
          target.className = temp;
          this.autoSwap();
        }

        if (this.gameType == 'medium') {
          const targetIndex = this.sequence1.indexOf(target.className.split(' ')[0]);
          const sourceIndex = this.sequence1.indexOf(source.className.split(' ')[0]);
          this.sequence1[targetIndex] = source.className.split(' ')[0];
          this.sequence1[sourceIndex] = target.className.split(' ')[0];
          console.log("finalSequence1 ", this.sequence1);
          const swappee = $(target).find('canvas').not(el);
          swappee.appendTo(source);
          let temp = source.className;
          source.className = target.className;
          target.className = temp;
          this.autoSwap1();
        }

      });

    this.userService.userData.subscribe(res => {
      this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'));
      console.log('ownedItemsList', this.ownedItemsList)
    })
  }


  // ionViewWillEnter() {
  //   this.filterList = JSON.parse(localStorage.getItem('filterList'));
  //   this.secondaryFilterList = JSON.parse(localStorage.getItem('secondaryList'));
  //   this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'));
  //   console.log('ownedItemsList', this.ownedItemsList)
  // }


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    let str1 = localStorage.getItem('base64String1')
    let str2 = localStorage.getItem('base64String2');
    this.cameraImage = str1.concat(str2)
    this.cameraImage = 'data:image/jpeg;base64,' + this.cameraImage;
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.gameType = this.route.snapshot.paramMap.get('gameType');
    if (this.gameType) {
      localStorage.setItem('GameType', this.gameType);
    }
    if (!this.gameType) {
      this.gameType = localStorage.getItem('GameType');
    }
    console.log('Game Type', this.gameType)
    this.compressImage(this.cameraImage, 100, 100).then((compressed) => {
      this.cameraImageThumbnail = compressed;
      console.log('this.cameraImageThumbnail', this.cameraImageThumbnail);
    });
    this.filterList = [];
    this.secondaryFilterList = []

    this.filterList = JSON.parse(localStorage.getItem('filterList'));
    this.secondaryFilterList = JSON.parse(localStorage.getItem('secondaryList'));
    this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'));



    // this.restService.getRequest('shop/AllFilterList').subscribe((res: any) => {
    //   this.spinnerDialog.show();
    //   if (res.status) {
    //     this.filterList = [];
    //     this.secondaryFilterList = []
    //     for (let i = 0; i < res.message.length; i++) {
    //       if (res.message[i].type == 'primary') {
    //         this.filterList.push(res.message[i])
    //       }

    //       if (res.message[i].type == 'secondary') {
    //         this.secondaryFilterList.push(res.message[i])
    //       }
    //     }
    //     console.log('FilterList', this.filterList);
    //     console.log('SecondatyList', this.secondaryFilterList);
    //   }
    //   this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
    //     this.ownedItemsList = res.message;
    //     console.log('this.ownedItemsList', this.ownedItemsList);
    //     this.isLoading = false;
    //     this.spinnerDialog.hide();
    //   });
    // })


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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  onSendGame() {
    this.sendGameLoader = true;
    var finalCanvas: any = <HTMLCanvasElement>document.createElement("canvas");
    var finalContext: any = finalCanvas.getContext("2d");
    finalCanvas.width = 360;
    finalCanvas.height = 360;

    let finalList = [];

    let children = $("." + this.sequence[0]).children("canvas");
    let children1 = $("." + this.sequence[1]).children("canvas");
    let children2 = $("." + this.sequence[2]).children("canvas");
    let children3 = $("." + this.sequence[3]).children("canvas");
    children.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });
    children1.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });
    children2.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });
    children3.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });

    // console.log('Final List', finalList)

    finalContext.drawImage(document.getElementById(finalList[0]), 0, 0);
    finalContext.drawImage(
      document.getElementById(finalList[1]),
      finalCanvas.width / 2,
      0
    );
    finalContext.drawImage(
      document.getElementById(finalList[2]),
      0,
      finalCanvas.height / 2
    );
    finalContext.drawImage(
      document.getElementById(finalList[3]),
      finalCanvas.width / 2,
      finalCanvas.height / 2
    );


    var finalSource = finalCanvas.toDataURL("image/jpeg");
    localStorage.setItem('puzzleImage', finalSource);

    const gameObj = {
      friend_id: this.userId,
      type: this.gameType,
      word: this.hintWord.value,
      swap_sequence: JSON.stringify(this.sequence),
      rotate_sequence: JSON.stringify(this.rotations),
      p_image: finalSource,
      image: this.cameraImage,
      filter_id: this.filter_id,
      secondary_values: JSON.stringify(this.secondaryValues)
    }

    // this.sequence = ['toHide', 'toHide1', 'toHide2', 'toHide3'];
    // this.rotations = {
    //   'toHide': 4, 'toHide1': 4, 'toHide2': 4, 'toHide3': 4
    // };

    // console.log('sendGameLoader', this.sendGameLoader)
    this.router.navigate(['send-game', { gameObj: JSON.stringify(gameObj) }], { replaceUrl: true }).then(res => {
      if (res) {
        this.sendGameLoader = false;
      }

    })

  }

  onSendGame1() {


    let pictureWidth;
    let pictureHeight;
    // this.audioService.play("buttonPress1");
    // var originalImage = $("#originalImage");
    let newImage = new Image();
    newImage.src = this.cameraImage;
    pictureWidth = 630
    pictureHeight = 630;


    console.log('pictureWidth', pictureWidth)
    console.log('pictureHeight', pictureWidth)


    var w2 = (pictureWidth / 3) - 10,
      h2 = (pictureHeight / 3) - 10;


    console.log('w2', w2);
    console.log('h2', h2);

    var finalCanvas: any = <HTMLCanvasElement>document.createElement("canvas");
    var finalContext: any = finalCanvas.getContext("2d");
    // finalCanvas.width = this.imageWidth - 10;
    // finalCanvas.height = this.imageWidth - 10;

    finalCanvas.width = 580;

    finalCanvas.height = 580;





    let finalList = [];

    let children = $("." + this.sequence1[0]).children("canvas");
    let children1 = $("." + this.sequence1[1]).children("canvas");
    let children2 = $("." + this.sequence1[2]).children("canvas");
    let children3 = $("." + this.sequence1[3]).children("canvas");
    let children4 = $("." + this.sequence1[4]).children("canvas");
    let children5 = $("." + this.sequence1[5]).children("canvas");
    let children6 = $("." + this.sequence1[6]).children("canvas");
    let children7 = $("." + this.sequence1[7]).children("canvas");
    let children8 = $("." + this.sequence1[8]).children("canvas");

    children.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });
    children1.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });
    children2.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });
    children3.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });
    children4.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });

    children5.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });

    children6.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });

    children7.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });

    children8.each(function () {
      let id = $(this).attr("id");
      finalList.push(id);
    });

    finalContext.drawImage(document.getElementById(finalList[0]), 0, 0);


    finalContext.drawImage(
      document.getElementById(finalList[1]),
      w2,
      0
    );


    finalContext.drawImage(
      document.getElementById(finalList[2]),
      (w2 * 2),
      0
    );


    finalContext.drawImage(
      document.getElementById(finalList[3]),
      0,
      h2
    );


    finalContext.drawImage(
      document.getElementById(finalList[4]),
      w2,
      h2
    );

    finalContext.drawImage(
      document.getElementById(finalList[5]),
      w2 * 2,
      h2
    );



    finalContext.drawImage(
      document.getElementById(finalList[6]),
      0,
      h2 * 2
    );

    finalContext.drawImage(
      document.getElementById(finalList[7]),
      w2,
      h2 * 2
    );


    finalContext.drawImage(
      document.getElementById(finalList[8]),
      (w2 * 2),
      (h2 * 2)
    );




    var finalSource = finalCanvas.toDataURL("image/jpeg");
    localStorage.setItem('puzzleImage', finalSource);
    console.log('Final Source', finalSource);

    const gameObj = {
      friend_id: this.userId,
      type: this.gameType,
      swap_sequence: JSON.stringify(this.sequence1),
      rotate_sequence: JSON.stringify(this.rotations1),
      p_image: finalSource,
      image: this.cameraImage,
      filter_id: this.filter_id,
      secondary_values: JSON.stringify(this.secondaryValues)
    }

    this.router.navigate(['send-game', { gameObj: JSON.stringify(gameObj) }], { replaceUrl: true }).then(res => {
      if (res) {
        this.sendGameLoader = false;
      }

    })




  }

  Crop() {

    this.hideImage = false;
    let originalImage = $("#originalImage");
    let self = this;
    let pictureWidth;
    let pictureHeight;
    let newImage = new Image();
    newImage.src = this.cameraImage;
    newImage.width = originalImage.width();


    newImage.height = originalImage.width();
    //this.imageWidth = originalImage.width();
    newImage.onload = function () {
      pictureWidth = originalImage.width();
      pictureHeight = originalImage.width();
      var w2 = pictureWidth / 2,
        h2 = pictureHeight / 2,
        parts = [];
      var count = 0;
      for (var i = 0; i < 4; i++) {
        count = i + 1;
        var canvas: any = <HTMLCanvasElement>(
          document.getElementById("canvas" + count)
        );
        console.log('Canvas', canvas);

        var ctx: any = canvas.getContext("2d");
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

    this.hideImage = true;

    // var x = document.getElementById("originalImage");

    // x.style.display = "none"
    // $("#originalImage").css("display", "none");
  }

  Crop1() {
    let originalImage = $("#originalImage");
    this.hideImage = false;
    let self = this;
    let pictureWidth;
    let pictureHeight;
    let newImage = new Image();
    newImage.src = this.cameraImage;
    // newImage.width = originalImage.width();
    // newImage.height = originalImage.height();
    //this.imageWidth = originalImage.width();
    newImage.onload = function () {
      pictureWidth = newImage.width;
      pictureHeight = newImage.height;

      var w2 = pictureWidth / 3,
        h2 = pictureHeight / 3,
        parts = [];

      var canvas: any = <HTMLCanvasElement>document.getElementById("canvas1");
      var ctx: any = canvas.getContext("2d");
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(newImage, 0, 0, w2, h2, 0, 0, canvas.width, canvas.height);

      canvas = <HTMLCanvasElement>document.getElementById("canvas2");
      ctx = canvas.getContext("2d");
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(newImage, w2, 0, w2, h2, 0, 0, canvas.width, canvas.height);

      (canvas = <HTMLCanvasElement>document.getElementById("canvas3")),
        (ctx = canvas.getContext("2d"));
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(
        newImage,
        w2 * 2,
        0,
        w2,
        h2,
        0,
        0,
        canvas.width,
        canvas.height
      );

      (canvas = <HTMLCanvasElement>document.getElementById("canvas4")),
        (ctx = canvas.getContext("2d"));
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(newImage, 0, h2, w2, h2, 0, 0, canvas.width, canvas.height);

      (canvas = <HTMLCanvasElement>document.getElementById("canvas5")),
        (ctx = canvas.getContext("2d"));
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(
        newImage,
        w2,
        h2,
        w2,
        h2,
        0,
        0,
        canvas.width,
        canvas.height
      );

      (canvas = <HTMLCanvasElement>document.getElementById("canvas6")),
        (ctx = canvas.getContext("2d"));
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(
        newImage,
        w2 * 2,
        h2,
        w2,
        h2,
        0,
        0,
        canvas.width,
        canvas.height
      );

      (canvas = <HTMLCanvasElement>document.getElementById("canvas7")),
        (ctx = canvas.getContext("2d"));
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(
        newImage,
        0,
        h2 * 2,
        w2,
        h2,
        0,
        0,
        canvas.width,
        canvas.height
      );

      (canvas = <HTMLCanvasElement>document.getElementById("canvas8")),
        (ctx = canvas.getContext("2d"));
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(
        newImage,
        w2,
        h2 * 2,
        w2,
        h2,
        0,
        0,
        canvas.width,
        canvas.height
      );

      var canvas: any = <HTMLCanvasElement>document.getElementById("canvas9"),
        ctx: any = canvas.getContext("2d");
      // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
      ctx.drawImage(
        newImage,
        w2 * 2,
        h2 * 2,
        w2,
        h2,
        0,
        0,
        canvas.width,
        canvas.height
      );

      self.imageWidth = canvas.width;

      self.imageHeight = canvas.height;

      // for (var i = 0; i < 4; i++) {
      //   var count = i + 1;
      //   var canvas: any = <HTMLCanvasElement>(
      //       document.getElementById("canvas" + count)
      //     ),
      //     ctx: any = canvas.getContext("2d");

      //   var x = (-w2 * i) % (w2 * 2),
      //     y = h2 * i <= h2 ? 0 : -h2;

      //   canvas.width = w2;
      //   canvas.height = h2;

      //   if (i == 3) {
      //     self.imageWidth = canvas.width + canvas.width;
      //   }
      //   console.log('x',x, 'y', y, 'width',  w2 * 2, 'height', h2 * 2);
      //   ctx.drawImage(newImage, x, y, w2 * 2, h2 * 2);
      // }
    };
    //end of onload function
    this.hideImage = true;
    $("#originalImage1").css("display", "none");
  }

  Rotate(index, c) {
    this.rotations[c]++;
    console.log(this.rotations);
    var canvas: any = <HTMLCanvasElement>(
      document.getElementById("canvas" + index)
    ),
      context: any = canvas.getContext("2d"),
      pictureWidth = canvas.width,
      pictureHeight = canvas.height;
    pictureWidth = pictureWidth * 2;
    pictureHeight = pictureHeight * 2;

    context.save();
    context.translate(pictureWidth / 4, pictureHeight / 4);
    context.rotate(Math.PI / 2);
    context.drawImage(
      canvas,
      -pictureWidth / 4,
      -pictureHeight / 4,
      pictureWidth / 2,
      pictureHeight / 2
    );
    context.restore();

  }

  Rotate1(index, c) {
    this.rotations1[c]++;
    console.log(this.rotations1);
    var canvas: any = <HTMLCanvasElement>(
      document.getElementById("canvas" + index)
    ),
      context: any = canvas.getContext("2d"),
      pictureWidth = canvas.width,
      pictureHeight = canvas.height;
    pictureWidth = pictureWidth * 2;
    pictureHeight = pictureHeight * 2;

    context.save();
    context.translate(pictureWidth / 4, pictureHeight / 4);
    context.rotate(Math.PI / 2);
    context.drawImage(
      canvas,
      -pictureWidth / 4,
      -pictureHeight / 4,
      pictureWidth / 2,
      pictureHeight / 2
    );
    context.restore();
    // this.audioService.play("rotatingTile");
  }

  checkOwnedFilter(filter) {

    return this.ownedItemsList.find(x => x.filter_id == filter.id);
  }


  sliderChanged(event) {
    // console.log("slider event", event.detail.value);
    this.secondaryValues.numbers[this.secondaryFilterSelected] = event.detail.value;
    // console.log('this.secondaryValues', this.secondaryValues);

    //alert(JSON.stringify(this.secondaryValues.numbers));
    //remember to set initial value of slider to number in json object
  }

  segmentChanged(ev: any) {
    this.spinnerDialog.show()
    //alert(ev.value);
    this.selection = ev;
    this.changeDetection.detectChanges();
    this.spinnerDialog.hide()
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

  makeFormGroup(arr) {
    return this.lettersArr.push(new FormControl(''))
  }

  compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement("canvas");
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext("2d");
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      };
      img.onerror = (error) => rej(error);
    });
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
    console.log('check this final sequence', this.sequence1);
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


  changePrimary(filter) {

    this.spinnerDialog.show();
    let res = this.ownedItemsList.filter(x => x.filter_id == filter.id)
    if (res.length) {
      this.spinnerDialog.hide();
      this.primaryFilter = filter.name;
      this.filter_id = filter.id;
    }
    else {
      this.spinnerDialog.hide();
      Swal.fire({
        text: 'You Want to purchase?',
        confirmButtonText: 'Yes',
        confirmButtonColor: '#99C43C',
        allowOutsideClick: true,
        showCancelButton: true,
        // backdrop: true,
      }).then(res => {
        if (res.isConfirmed) {
          // this.router.navigate(['main/store', { filter: trfilter: true }])
          this.navCtrl.navigateForward(['main/store'], { queryParams: { filterData: JSON.stringify(filter) } })

        }
      });

      // this.presentAlertForShop('Sorry', 'Yo do not have this filter want to buy?', filter)
    }

  }

  changeButtons(filter) {
    this.spinnerDialog.show();
    let res = this.ownedItemsList.filter(x => x.filter_id == filter.id)
    if (res.length) {
      this.spinnerDialog.hide();
      if (filter.name == "hue-rotate") {
        filter.name = "hue_rotate";
      }
      this.secondaryFilterSelected = filter.name;
      $("ion-range").attr("value", this.secondaryValues.numbers[filter.name]);
      this.secondaryValues.ranges[this.secondaryFilterSelected].sliderValue = this.secondaryValues.numbers[this.secondaryFilterSelected];
      this.lastValue = this.secondaryValues.numbers[this.secondaryFilterSelected];

      this.buttons = "secondary";
    } else {
      console.log('Filterr', this.secondaryFilterSelected);

      if (filter.name == "hue-rotate") {
        filter = "hue_rotate";
      }
      let hasItem = false;
      let selectedFilter;
      let selectedOwnedFilter;
      for (let i = 0; i < this.proSecondaryFilters.length; i++) {
        if (this.proSecondaryFilters[i] == filter.name) {
          selectedFilter = "proSecondaryFilter";
          selectedOwnedFilter = "ProSecondaryFilter";
        }
      }
      for (let i = 0; i < this.primeSecondaryFilters.length; i++) {
        if (this.primeSecondaryFilters[i] == filter.name) {
          selectedFilter = "primeSecondaryFilter";
          selectedOwnedFilter = "PrimeSecondaryFilter";
        }
      }
      for (let i = 0; i < this.ownedItemsList.length; i++) {
        if (this.ownedItemsList[i].name == selectedOwnedFilter) {
          hasItem = true;
        }
      }
      if (hasItem == true) {
        if (filter == "hue_rotate") {
          filter = "hue-rotate";
        }

      } else {
        if (filter == "hue_rotate") {
          filter = "hue-rotate";
        }

        this.spinnerDialog.hide();
        Swal.fire({
          text: 'You Want to purchase?',
          confirmButtonText: 'Yes',
          confirmButtonColor: '#99C43C',
          allowOutsideClick: true,
          showCancelButton: true,
          // backdrop: true,
        }).then(res => {
          if (res.isConfirmed) {
            // this.router.navigate(['main/store', { filter: trfilter: true }])
            this.navCtrl.navigateForward(['main/store'], { queryParams: { filter: true } })

          }
        });

      }
    }

  }

  onNavigateEvent() {
    this.navCtrl.navigateBack('/contactlist');
  }
}
