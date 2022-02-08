import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { PhotoService } from 'src/app/service/photo.service';
import { RestService } from 'src/app/service/rest.service';
import { CameraSource } from '@capacitor/camera';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-freind',
  templateUrl: './freind.page.html',
  styleUrls: ['./freind.page.scss'],
})
export class FreindPage implements OnInit {
  friendist = [];
  gameLevel = 4;
  slidesLength = 3;
  gameType = 'easy';
  // levelCheck = [1, 2, 3]
  randomList = [];
  user;
  constructor(private restService: RestService,
    private photoService: PhotoService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    // console.log('Add Friend', this.activatedRoute.snapshot.paramMap.get('addFriend'));

    this.user = JSON.parse(localStorage.getItem('user'))

    if (this.activatedRoute.snapshot.paramMap.get('addFriend')) {
      this.getFriendList();
    }

    this.restService.getRequest('users/play-random').subscribe((res: any) => {
      if (res.status) {
        this.randomList = res.message;
        if (this.randomList.length <= 2) {
          this.slidesLength = this.randomList.length;
        }
      }
    })
    let user = localStorage.getItem('user')
    user = JSON.parse(user);
    this.getFriendList();

  }

  ionViewWillEnter() {
    this.getFriendList();
  }
  async cameraOrGallery(id) {

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
    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  async getPicture(src, id) {
    this.presentLoading();
    const res = await this.photoService.addNewToGallery(src);
    if (res.base64String) {
      // this.loadingController.dismiss();
      var firstHalfLength = res.base64String.length / 2;
      localStorage.setItem('base64String1', res.base64String.substr(0, firstHalfLength))
      localStorage.setItem('base64String2', res.base64String.substr(firstHalfLength))
      this.router.navigate(['filter', { userId: id, gameType: this.gameType }], { replaceUrl: true });
      // this.router.navigate(['filter', { image: res.base64String, userId: id, gameType: this.gameType }], { replaceUrl: true });
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
      cancelButtonColor: "#ebb434",
      cancelButtonText: this.user.level_id < 4 ? "Medium (Unlock at level 5)" : "Medium"

    },

    ).then((result: any) => {


      if (!result.isConfirmed) { return }

      result.dismiss == 'cancel' ? this.gameType = 'medium' : result.value == true ? this.gameType = 'easy' : this.gameType = '';

      this.cameraOrGallery(id)

    });
  }

  getFriendList() {
    let user = localStorage.getItem('user')
    user = JSON.parse(user);
    this.restService.getRequest('contacts/listing').subscribe((res: any) => {
      this.friendist = res.filter(f => {
        return f.id != user['id']
      })
    });
  }
}
