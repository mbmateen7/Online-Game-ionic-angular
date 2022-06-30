import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

import {
    AdMob,
    BannerAdOptions,
    BannerAdSize,
    BannerAdPosition,
    BannerAdPluginEvents,
    AdMobBannerSize,
} from '@capacitor-community/admob';
import { LoadingController } from '@ionic/angular';
@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
    filterList: any;
    secondaryFilterList: any;
    ownedItemsList: any;
    activeTab = 'game';
    constructor(
        private restService: RestService,
        private loading: LoadingController
    ) {}

    ngOnInit() {
        this.restService
            .getRequest('shop/AllFilterList')
            .subscribe((res: any) => {
                // this.spinnerDialog.show();
                console.log('All filters response');
                if (res.status) {
                    this.filterList = [];
                    this.secondaryFilterList = [];
                    for (let i = 0; i < res.message.length; i++) {
                        if (res.message[i].type == 'primary') {
                            this.filterList.push(res.message[i]);
                        }

                        if (res.message[i].type == 'secondary') {
                            this.secondaryFilterList.push(res.message[i]);
                        }
                    }
                    localStorage.setItem(
                        'filterList',
                        JSON.stringify(this.filterList)
                    );
                    localStorage.setItem(
                        'secondaryList',
                        JSON.stringify(this.secondaryFilterList)
                    );
                }
                this.restService
                    .getRequest('shop/purchase-detail')
                    .subscribe((res: any) => {
                        console.log('purchase detail reponse');
                        this.ownedItemsList = res.message;
                        localStorage.setItem(
                            'ownedItemsList',
                            JSON.stringify(this.ownedItemsList)
                        );
                        // console.log('this.ownedItemsList', this.ownedItemsList);
                        // this.isLoading = false;
                        // this.spinnerDialog.hide();
                    });
            });
        initialize().then((r) => {
            banner().then((x) => {
                let tabBar = document.getElementsByTagName('ion-app');
                tabBar[0].style.bottom = '60px';
            });
        });
    }

    setCurrentTab(e) {
        console.log('This is event', e.tab);
        this.activeTab = e.tab;
    }

    doLoading() {
        let loader: any = this.loading.create({
            message: 'Loading...',
        });
    }
}

export async function banner(): Promise<void> {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
        // Subscribe Banner Event Listener
    });

    AdMob.addListener(
        BannerAdPluginEvents.SizeChanged,
        (size: AdMobBannerSize) => {
            // Subscribe Change Banner Size
        }
    );

    const options: BannerAdOptions = {
        adId: 'ca-app-pub-3940256099942544/6300978111',
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        // isTesting: true
        // npa: true
    };
    AdMob.showBanner(options);
}

export async function initialize(): Promise<void> {
    const { status } = await AdMob.trackingAuthorizationStatus();

    if (status === 'notDetermined') {
        /**
         * If you want to explain TrackingAuthorization before showing the iOS dialog,
         * you can show the modal here.
         * ex)
         * const modal = await this.modalCtrl.create({
         *   component: RequestTrackingPage,
         * });
         * await modal.present();
         * await modal.onDidDismiss();  // Wait for close modal
         **/
    }

    AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
        initializeForTesting: true,
    });
}
