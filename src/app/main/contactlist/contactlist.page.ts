import { Component, OnInit } from '@angular/core';

import { PhotoService } from 'src/app/service/photo.service';
import { AlertController } from '@ionic/angular';
import { CameraSource } from '@capacitor/camera';
import { ActivatedRoute, Router } from '@angular/router';

import { RestService } from 'src/app/service/rest.service';

import { LoadingController } from '@ionic/angular';

import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.page.html',
  styleUrls: ['./contactlist.page.scss'],
})
export class ContactlistPage implements OnInit {
  freindList = [];
  showUserList = false;
  usernameSearchRes = [];
  gameType = 'easy';
  gameLevel = 4;
  user;
  showFilterPageLoader = false;

  constructor(
    public photoService: PhotoService,
    public alertController: AlertController,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private restService: RestService,
    public loadingController: LoadingController,
    private spinnerDialog: SpinnerDialog,
  ) { }

  ngOnInit() {



    console.log(this.activatedRoute.snapshot.paramMap.get('friend_id'));


    this.user = JSON.parse(localStorage.getItem('user'));

    const friendId = this.activatedRoute.snapshot.paramMap.get('friend_id');

    if (friendId) {
      console.log('--------------->')
      this.cameraOrGallery(friendId)
    }

    this.getFriendList();

  }

  ionViewDidEnter() {
    console.log(this.activatedRoute.snapshot.paramMap.get('friend_id'));


    this.user = JSON.parse(localStorage.getItem('user'));

    const friendId = this.activatedRoute.snapshot.paramMap.get('friend_id');

    if (friendId) {
      this.cameraOrGallery(friendId)
    }

    this.getFriendList();

  }
  async cameraOrGallery(id) {

    // const alert = await this.alertController.create({
    //   // cssClass: 'my-custom-class',
    //   // header: 'Alert',
    //   // subHeader: 'Please Select',
    //   message: 'Please Select.',
    //   buttons: [
    //     {
    //       text: 'Gallery',
    //       role: 'gallery',
    //       cssClass: 'secondary',
    //       handler: () => {
    //         this.getPicture(CameraSource.Photos, id);
    //       },
    //     },
    //     {
    //       text: 'Camera',
    //       role: 'camera',
    //       handler: () => {
    //         this.getPicture(CameraSource.Camera, id);
    //       },
    //     },
    //   ],
    // });

    // await alert.present();

    if(this.gameType == ""){
      const alert = await this.alertController.create({
        message: 'Oops! Medium difficulty will unlock at level 5.',
        buttons: [
          {
            text: 'Okay',
            role: 'Okay',
            cssClass: 'secondary',
            handler: () => {
              // this.getPicture(CameraSource.Photos, id);
            },
          }
        ],
      });
  
      await alert.present();
    }else {
      const alert = await this.alertController.create({
        // cssClass: 'my-custom-class',
        // header: 'Alert',
        // subHeader: 'Please Select',
        message: 'Please Select.',
        buttons: [
          {
            text: 'Gallery',
            role: 'gallery',
            cssClass: 'secondary',
            handler: () => {
              this.getPicture(CameraSource.Photos, id);
            },
          },
          {
            text: 'Camera',
            role: 'camera',
            handler: () => {
              this.getPicture(CameraSource.Camera, id);
            },
          },
        ],
      });
  
      await alert.present();
    }
    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  async getPicture(src, id) {
    this.showFilterPageLoader = true;
    const res = await this.photoService.addNewToGallery(src);
    if (res.base64String) {
      localStorage.setItem('base64String1', '');
      localStorage.setItem('base64String2', '');
      localStorage.setItem('puzzleImage', '');
      this.showFilterPageLoader = true;
      var firstHalfLength = res.base64String.length / 2;
      localStorage.setItem('base64String1', res.base64String.substr(0, firstHalfLength))
      localStorage.setItem('base64String2', res.base64String.substr(firstHalfLength))
      this.router.navigate(['filter', { userId: id, gameType: this.gameType }], { replaceUrl: true });
    } else {
      this.showFilterPageLoader = false;

    }

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

  onSearchByUsername(e) {
    let username = e.target.value
    this.showUserList = true;
    const searchObj = {
      user_name: username
    }
    this.restService.postRequestToken('users/user-name', searchObj).subscribe((res: any) => {
      this.usernameSearchRes = res.user;
    })

  }

  onCancelSearch() {
    this.showUserList = false;
  }

  openDialogBox(obj) {
    Swal.fire({
      text: "Are you want to add as friend ",
      confirmButtonText: "Yes",
      confirmButtonColor: "#99C43C",
      showCancelButton: true,
      allowOutsideClick: false,
      // backdrop: true,
      cancelButtonColor: "#E86B5D",
      cancelButtonText: "Cancel",
    }).then(res => {
      if (res.isConfirmed) {
        this.addFriendNameByUsername(obj)
      }
    })

  }

  selectDifficultyLevel(id) {
    Swal.fire({

      customClass: {
        actions: 'vertical-buttons',
        cancelButton: this.gameLevel > 4 ? 'top-margin' : 'top-margin disable',
        confirmButton: 'font-size1'
      },

      title: "Select Difficulty Level",
      confirmButtonText: "Easy",
      confirmButtonColor: "#99C43C",
      showCancelButton: true,
      // allowOutsideClick: true,
      cancelButtonColor: this.user.level_id < 4 ? "#ccc" : "#ebb434",
      cancelButtonText: this.user.level_id < 4 ? "Medium (Unlock at level 5)" : "Medium"

    },

    ).then((result: any) => {

      console.log('swal-result', result)
    
      if (result.dismiss == "backdrop") { return }

      if(result.dismiss == 'cancel'){
        if(this.user.level_id < 4) {
          this.gameType = '';
        }else {
          this.gameType = 'medium';
        }
      } else {
        result.value == true ? this.gameType = 'easy' : this.gameType = '';
      }

      this.cameraOrGallery(id)

    });
  }

  onRandomPlay() {
    this.spinnerDialog.show();
    this.restService.getRequest('users/play-random').subscribe((res: any) => {
      if (res.status) {
        let index = this.getRandomInt(res.message.length);
        if (index < 0) {
          this.spinnerDialog.hide();
          Swal.fire({
            title:
              '<img src="assets/icon/questionmark.png" style="width: 20vw; height:20vw;">',
            text: "No User is Found ",
            cancelButtonColor: "#E86B5D",
            cancelButtonText: "Cancel",
          });
        } else {
          this.spinnerDialog.hide();
          Swal.fire({
            title:
              '<img src="assets/icon/questionmark.png" style="width: 20vw; height:20vw;">',
            text: "Match found with " + res.message[index].user_name,
            confirmButtonText: "Let's play!",
            confirmButtonColor: "#99C43C",
            showCancelButton: true,
            allowOutsideClick: false,
            // backdrop: true,
            cancelButtonColor: "#E86B5D",
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.value) {
              this.selectDifficultyLevel(res.message[index].id);
            } else {
            }
          });
        }
      }
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onDelFriend(id) {
    const friendObj = { friend_id: id }
    Swal.fire({
      title: 'Remove',
      text: 'Are you sure to remove this user?',
      showCancelButton: true,
      showConfirmButton: true,

    }).then(res => {
      if (res.isConfirmed) {
        this.restService.delRequest('contacts/delete', friendObj).subscribe(res => {
          const frndArr = this.freindList.filter(x => { return x.id != id });
          this.freindList = frndArr;
          // console.log(' This is ffriend Object', frndArr);
        })
      }

    })
  }

  addFriendNameByUsername(obj) {
    this.restService.postRequestToken('contacts/add-username', { friend_id: obj.id }).subscribe((res: any) => {
      if (res) {
        this.showUserList = false;
        Swal.fire({
          title: 'Success',
          text: "Friend Added",
          confirmButtonText: "Cool",
        })
        this.getFriendList();
      }
    })
  }

  getFriendList() {
    this.restService.getRequest('contacts/listing').subscribe((res: any) => {
      this.freindList = res.filter(x => x.id != this.user.id);
      if (!this.freindList.length) {
        this.showFilterPageLoader = false;
      }
    });
  }
}
