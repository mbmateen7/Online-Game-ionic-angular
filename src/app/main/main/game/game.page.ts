import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';


import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { PushNotifications } from "@capacitor/push-notifications";

import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  progressPercent = 0;
  gameList = null;
  user;
  claimList = [];
  levelList = [];
  showMoveList = false;
  showRewardList = false;
  showGiveRewardList = false;
  showClaimBtn = false;
  showGiveRewardClaimBtn = false;
  constructor(
    private restService: RestService,
    private router: Router,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute, private googlePlus: GooglePlus
  ) {


    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    });

    PushNotifications.addListener('pushNotificationReceived', (res) => {
      let showRespnse = true;
      if (res && showRespnse) {
        showRespnse = false;
        this.showMoveList = false;
        this.gameList = [];
        this.restService.getRequest('games/get-game').subscribe((res: any) => {
          if (res.user) {
            this.gameList = res.user;
            console.log('this.gameList', this.gameList);
            this.showMoveList = true;

            Swal.fire({
              title: 'Sucess',
              text: 'New Game Received',
              showCloseButton: true,
            })
          }

        });
        this.getUserDetail();
        this.getCalimList();
      }
    })

  }

  ionViewDidEnter() {
    this.getUserDetail();
  }
  ngOnInit() {



    // console.log('Gamesent param', this.activatedRoute.snapshot.paramMap.get('gameSent'))

    this.getGameList();
    this.getUserDetail();
    this.getCalimList();

    if (this.activatedRoute.snapshot.paramMap.get('gameSent')) {
      this.getGameList();
      this.getUserDetail();
      this.getCalimList();
    }

    this.showMoveList = false;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getLevelList();
    this.showMoveList = false;

    console.log('User', this.user)
  }


  ionViewWillEnter() {
    this.getCalimList();

  }

  onPlayGame(game) {

    this.router.navigate(['play-game', { game: JSON.stringify(game) }], { replaceUrl: true });

  }

  onRewardUpdate(user, i) {


    this.claimList[i].claim_reward.splice(this.claimList[i].claim_reward.indexOf(user), 1);
    const rewardObj = {
      game_id: user.game_id,
      reward_id: user.reward_id,
      player_id: user.friend_id,

    }
    console.log('calim list', this.claimList)


    this.restService.postRequestToken('claim/claim-reward', rewardObj).subscribe(res => {
      if (res) {
        this.getCalimList()

        this.restService.getRequest('users/detail').subscribe((res: any) => {
          this.user = res;
          localStorage.setItem('user', JSON.stringify(res));
          Swal.fire({
            title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed all!</h5></div>',
            text: 'Reward is claimed',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#99C43C',
            allowOutsideClick: true,
            // backdrop: true,
          });

        })
      }
    })
  }

  getLevelList() {

    this.restService.getRequest('users/get-level-list').subscribe((res: any) => {

      let baseLvl = null;
      let upLvl = null;
      this.levelList = res.message;
      this.user = localStorage.getItem('user');
      this.user = JSON.parse(this.user);
      baseLvl = this.levelList.filter(lvl => lvl.id == this.user.level_id);
      upLvl = this.levelList.filter(lvl => lvl.id == this.user.level_id + 1);
      // console.log('--', baseLvl[0]);

      if (baseLvl[0]) {
        const baseDiff = upLvl[0].experience - baseLvl[0].experience;
        if (this.user.experience > baseLvl[0].experience) {
          const exp = this.user.experience - baseLvl[0].experience;
          this.progressPercent = (exp / baseDiff) * 100;
        }
      }
      else {
        this.progressPercent = 0
      }



    })

  }

  onNewGameEvent() {
    this.navCtrl.navigateForward('/contactlist')

  }

  getGameList() {

    this.restService.getRequest('games/get-game').subscribe((res: any) => {
      if (res.user && !this.showMoveList) {
        this.gameList = res.user;
        this.showMoveList = true;
      }

    });
  }

  getUserDetail() {

    this.restService.getRequest('users/detail').subscribe((res: any) => {
      this.user = res;
      localStorage.setItem('user', JSON.stringify(res));
    })

  }

  getCalimList() {
    this.restService.getRequest('claim/claim-list').subscribe((res: any) => {
      if (res.claim) {
        this.claimList = res.claim;
        console.log('Claim list', this.claimList)
        this.showRewardList = true;
      }
    });
  }

  claimAllReward() {
    let allClaimRewardList = [];
    this.claimList.forEach((claim) => {
      claim.claim_reward.forEach(el => {
        if (el.reward_id != 4) {
          allClaimRewardList.push(el)
        }
      });
    })

    // console.log('allClaimRewardList', allClaimRewardList);


    this.restService.postRequestToken('claim/claim-reward-for-all', { list: allClaimRewardList }).subscribe(res => {
      if (res) {
        this.getCalimList();
        this.restService.getRequest('users/detail').subscribe((res: any) => {
          this.user = res;
          localStorage.setItem('user', JSON.stringify(res));
          Swal.fire({
            title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed all!</h5></div>',
            text: 'Reward is claimed',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#99C43C',
            allowOutsideClick: true,
            // backdrop: true,
          });

        })
      }
    })


  }

  giveRewardToAll() {
    let allClaimRewardList = [];
    this.claimList.forEach((claim) => {
      claim.give_reward.forEach(el => {
        if (el.reward_id == 4) {
          allClaimRewardList.push(el)
        }
      });
    })

    console.log('---->', allClaimRewardList)
    this.restService.postRequestToken('claim/give-reward-to-all', { list: allClaimRewardList }).subscribe(res => {
      if (res) {
        this.getCalimList();
        this.restService.getRequest('users/detail').subscribe((res: any) => {
          this.user = res;
          localStorage.setItem('user', JSON.stringify(res));
          Swal.fire({
            title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed all!</h5></div>',
            text: 'Reward is claimed',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#99C43C',
            allowOutsideClick: true,
            // backdrop: true,
          });

        })
      }
    })
  }

  refreshGame(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  // check(user_reward) {
  //   if (user_reward.reward_id != 4) {
  //     this.showClaimBtn = true;
  //     return true
  //   }
  //   this.showClaimBtn = false;
  //   return false;
  // }


  // giveRewardCheckBtn(user_reward) {
  //   if (user_reward.reward_id == 4) {
  //     this.showGiveRewardClaimBtn = true;
  //     return true
  //   }
  //   this.showGiveRewardClaimBtn = false;
  //   return false;
  // }




}
