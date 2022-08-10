import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { PhotoService } from 'src/app/service/photo.service';
import { RestService } from 'src/app/service/rest.service';
import { CameraSource } from '@capacitor/camera';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/service/storage.service';
@Component({
    selector: 'app-freind',
    templateUrl: './freind.page.html',
    styleUrls: ['./freind.page.scss'],
})
export class FreindPage implements OnInit {
    friendList = [];
    gameLevel = 4;
    slidesLength = 3;
    gameType = 'easy';
    // levelCheck = [1, 2, 3]
    randomList = [];
    user;
    constructor(
        private restService: RestService,
        private photoService: PhotoService,
        private alertController: AlertController,
        private loadingController: LoadingController,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private db: StorageService
    ) {}

    ngOnInit() {
        // console.log('Add Friend', this.activatedRoute.snapshot.paramMap.get('addFriend'));

        // this.user = JSON.parse(localStorage.getItem('user'));
        this.db.getItem('user').then(res => {
            this.user= res
        });

        if (this.activatedRoute.snapshot.paramMap.get('addFriend')) {
            this.getFriendList();
        }

        this.restService
            .getRequest('users/play-random')
            .subscribe((res: any) => {
                if (res.status) {
                    this.randomList = res.message;
                    if (this.randomList.length <= 2) {
                        this.slidesLength = this.randomList.length;
                    }
                }
            });
        // let user = localStorage.getItem('user');
        // user = JSON.parse(user);

        this.db.getItem('user').then(res => {
            this.user= res
        });
        this.getFriendList();
    }

    ionViewWillEnter() {
        this.getFriendList();
    }
    async cameraOrGallery(id) {
        if (this.gameType == '') {
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
                    },
                ],
            });

            await alert.present();
        } else {
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
        this.presentLoading();
        const res = await this.photoService.addNewToGallery(src);
        if (res.base64String) {
            // this.loadingController.dismiss();
            var firstHalfLength = res.base64String.length / 2;
            this.db.setItem(
                'base64String1',
                res.base64String.substr(0, firstHalfLength)
            );
            this.db.setItem(
                'base64String2',
                res.base64String.substr(firstHalfLength)
            );
            this.router.navigate(
                ['filter', { userId: id, gameType: this.gameType }],
                { replaceUrl: true }
            );
            // this.router.navigate(['filter', { image: res.base64String, userId: id, gameType: this.gameType }], { replaceUrl: true });
        }
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
    }

    doLoading() {
        let loader: any = this.loadingController.create({
            message: 'Loading...',
        });
        return loader;
    }

    selectDifficultyLevel(id) {
        Swal.fire({
            customClass: {
                actions: 'vertical-buttons',
                cancelButton:
                    this.gameLevel > 4 ? 'top-margin' : 'top-margin disable',
                confirmButton: 'font-size1',
            },

            title: 'Select Difficulty Level',
            confirmButtonText: 'Easy',
            confirmButtonColor: '#99C43C',
            showCancelButton: true,
            // allowOutsideClick: true,
            cancelButtonColor: this.user.level_id < 4 ? '#ccc' : '#ebb434',
            cancelButtonText:
                this.user.level_id < 4
                    ? 'Medium (Unlock at level 5)'
                    : 'Medium',
        }).then((result: any) => {
            if (result.dismiss == 'backdrop') {
                return;
            }

            if (result.dismiss == 'cancel') {
                if (this.user.level_id < 4) {
                    this.gameType = '';
                } else {
                    this.gameType = 'medium';
                }
            } else {
                result.value == true
                    ? (this.gameType = 'easy')
                    : (this.gameType = '');
            }

            this.cameraOrGallery(id);
        });
    }

    getFriendList() {
        // let user = localStorage.getItem('user');
        this.db.getItem('user').then(res => {
            this.user= res
        });
        // this.user = JSON.parse(this.user);
        this.restService
            .getRequest('contacts/listing')
            .subscribe((res: any) => {
                this.friendList = res.filter((f) => {
                    return f.id != this.user['id'];
                });
            });
    }

    deleteFriend(id: any) {
        const friendInstance = { friend_id: id };
        Swal.fire({
            title: 'Remove',
            text: 'Are you sure to remove this Friend?',
            showCancelButton: true,
            showConfirmButton: true,
        }).then((res) => {
            if (res.isConfirmed) {
                this.doLoading()
                    .present()
                    .then(() => {
                        this.restService
                            .delRequest('contacts/delete', friendInstance)
                            .subscribe((res) => {
                                const friendDetail = this.friendList.filter(
                                    (x) => {
                                        return x.id != id;
                                    }
                                );
                                this.friendList = friendDetail;
                            });
                        this.doLoading().dismiss();
                    });
            }
        });
    }
}
