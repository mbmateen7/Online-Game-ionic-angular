import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { endAt } from 'firebase/firestore';
import { UserService } from 'src/app/service/user.service';
import { FilterPage } from './filter/filter.page';
import Swal from 'sweetalert2';
import { LoadingController, NavController } from '@ionic/angular';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit{
  user;
  date;
  lastLogin;
  CheckDate;
  dateCount;
  dateCounter=1;
  buttonDisabled: boolean;
  lastClaimDate;
  isFilterOpened = true;
  isItemOpened = false;
  isBundleOpened = false;
  filterPage: boolean = false
  filterData;
  @ViewChild(FilterPage) child;
  userData;
  lastGameCheck = false;
  lastGame;

  constructor(private db: StorageService ,private route: ActivatedRoute, private userService: UserService, private loading: LoadingController, private navCtrl: NavController, private router: Router) {
    this.userService.userSourceValue;
    this.userService.userData?.subscribe(res => {
      console.log(res);
      this.user = res;
    })
  }

  ngOnInit() {
    this.buttonDisabled = false;
    // this.user = JSON.parse(localStorage.getItem('user'));
    this.db.getItem('user').then(res => {
      this.user= res
  });
  
    // this.lastClaimDate = localStorage.getItem('LastLoginClaim');
    this.db.getItem('LastLoginClaim').then(res => {
      this.lastClaimDate= JSON.parse(res)
  });
  
    let ClaimDate = this.lastClaimDate;
    console.log('claim date ='+ ClaimDate);

      let savedClaimDate = new Date(ClaimDate?.date).getDate();  
      let inDateCount = ClaimDate?.dateCount;
      this.lastLogin = new Date(this.user?.last_login);  
      let LoginClaimDate =  (this.lastLogin).getDate();
      let claimDateSum = LoginClaimDate - savedClaimDate;
      
      
      

      console.log("1->"+LoginClaimDate, "2->"+savedClaimDate);
      if (LoginClaimDate == savedClaimDate)
      {
        this.buttonDisabled = true;
      }

      if (inDateCount == 5 || claimDateSum > 1 ) {
        for (let index = 1; index <= inDateCount; index++) {
          const element = document.getElementById('claim-image-'+index).style.opacity='1';
        }
      } else {
      for (let index = 1; index <= inDateCount; index++) {
            const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
          }
      }
    // this.lastClaimDate = localStorage.getItem('LastLoginClaim');
    //  let ClaimDate = JSON.parse(this.lastClaimDate);

    //   let inDateCount = ClaimDate.dateCount;
    //   for (let index = 1; index <= inDateCount; index++) {
    //     const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
    //   }

  }

  ionViewWillEnter() {
    // let lastGame = localStorage.getItem('lastGame');
    let lastGame;
    this.db.getItem('lastGame').then(res => {
      lastGame= res
  });
    if (lastGame) {
        // this.lastGame = JSON.parse(lastGame);
        this.lastGameCheck = true;
    }
    this.filterData = JSON.parse(this.route.snapshot.queryParamMap.get('filterData'));
    console.log('FilterData', this.filterData)
    this.filterPage = this.filterData?.id ? true : false
  }
  changeTab(x) {
    if (x === 'f') {
      this.isFilterOpened = true;
      this.isItemOpened = false;
      this.isBundleOpened = false;
    }
    if (x === 'i') {
      this.isFilterOpened = false;
      this.isItemOpened = true;
      this.isBundleOpened = false;
    }
    if (x === 'b') {
      this.isFilterOpened = false;
      this.isItemOpened = false;
      this.isBundleOpened = true;
    }
  }

  receiveMessage($event) {
    // this.message = $event
    console.log('Eventt', $event)
    this.isFilterOpened = false;
    this.isItemOpened = false;
    this.isBundleOpened = true;
  }

  claimDailyReward(){

    this.lastLogin = new Date(this.user.last_login);

    //  this.lastClaimDate = localStorage.getItem('LastLoginClaim');
    this.db.getItem('LastLoginClaim').then(res => {
      this.lastClaimDate = JSON.parse(res);
  });
    
     console.log("First Claimdate Full:"+this.lastClaimDate);
    //  let ClaimDate = JSON.parse(this.lastClaimDate);

    //   let inDateCount = ClaimDate.dateCount;

    //   console.log(inDateCount);
    //   for (let index = 1; index <= inDateCount; index++) {
    //     const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
    //   }

    //   this.updateUser();

      
    if (!this.lastClaimDate || this.lastClaimDate === 'null')
    {
            console.log("if");
            this.dateCounter = 1;
            this.db.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));
            // this.lastClaimDate = localStorage.getItem('LastLoginClaim');
            this.db.getItem('LastLoginClaim').then(res => {
              this.lastClaimDate = JSON.parse(res);
          });
            let ClaimDate = this.lastClaimDate;
            let savedClaimDate =  (this.lastLogin).getDate();
            let lastSavedClaimDate = (new Date(ClaimDate.date).getDate());
            let inDateCount = ClaimDate.dateCount;


        
            if ( lastSavedClaimDate == savedClaimDate)
            {
              console.log("i got 10 points in if");
              this.updateUser(10);
              this.buttonDisabled = true;
              Swal.fire({
                title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                text: 'Daily Puzzle Pieces Rewarded!',
                confirmButtonText: 'Cool',
                confirmButtonColor: '#99C43C',
                allowOutsideClick: true,
            });
            for (let index = 1; index <= inDateCount; index++) {
              const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
            }
            }
          
    }
    else 
    {
              console.log("else");
              let ClaimDate = this.lastClaimDate;
              let signInUser = this.user.id;
              let localsignedUser = ClaimDate.userId;
                if (signInUser != localsignedUser)
                {
                  this.dateCounter = 1;
                  this.db.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));
                  // this.lastClaimDate = localStorage.getItem('LastLoginClaim');
                  this.db.getItem('LastLoginClaim').then(res => {
                    this.lastClaimDate = JSON.parse(res);
                });
                  let ClaimDate =this.lastClaimDate;
                  let savedClaimDate =  (this.lastLogin).getDate();
                  let lastSavedClaimDate = (new Date(ClaimDate.date).getDate());
                  
            
                    
                        if ( lastSavedClaimDate == savedClaimDate)
                        {
                          console.log("i got 10 points in if");
                          this.updateUser(10);
                          Swal.fire({
                            title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                            text: 'Daily Puzzle Pieces Rewarded!',
                            confirmButtonText: 'Cool',
                            confirmButtonColor: '#99C43C',
                            allowOutsideClick: true,
                        });
                        
                        }
                }
                else {
              
              
                      // this.lastClaimDate = localStorage.getItem('LastLoginClaim');
                      this.db.getItem('LastLoginClaim').then(res => {
                        this.lastClaimDate = JSON.parse(res);
                    });
                      let ClaimDate = this.lastClaimDate;

                        let savedClaimDate = new Date(ClaimDate.date).getDate();  
                        let inDateCount = ClaimDate.dateCount;
                        console.log("inDateCount:"+ inDateCount)

                        console.log("else last user login :"+(this.lastLogin).getDate());
                        console.log("localstorage last user login"+savedClaimDate);
                      
                      let claimDateSum = ((this.lastLogin).getDate()) - savedClaimDate;
                          console.log("sum of different date"+claimDateSum); 

                        
                        if (claimDateSum <=1 && inDateCount <=4)
                        {
                          let inDateCount = ClaimDate.dateCount;
                            console.log("inDateCount:"+ inDateCount)
                            this.dateCounter = inDateCount;
                          this.dateCounter ++;
                          this.db.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));
                            
                            console.log("counter in else if"+this.dateCounter);
                               for (let index = 1; index <= inDateCount+1; index++) {
                                    const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
                                                                }

                            switch (this.dateCounter) {
                              case 1:
                                this.updateUser(10);
                                Swal.fire({
                                  title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                  text: 'Daily Puzzle Pieces Rewarded!',
                                  confirmButtonText: 'Cool',
                                  confirmButtonColor: '#99C43C',
                                  allowOutsideClick: true,
                              });
                                this.buttonDisabled = true;
                                break;
                              case 2:
                                this.updateUser(20);  
                                Swal.fire({
                                  title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                  text: 'Daily Puzzle Pieces Rewarded!',
                                  confirmButtonText: 'Cool',
                                  confirmButtonColor: '#99C43C',
                                  allowOutsideClick: true,
                              });
                                this.buttonDisabled = true;                              
                                break;
                              case 3:
                                this.updateUser(30); 
                                Swal.fire({
                                  title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                  text: 'Daily Puzzle Pieces Rewarded!',
                                  confirmButtonText: 'Cool',
                                  confirmButtonColor: '#99C43C',
                                  allowOutsideClick: true,
                              });
                                this.buttonDisabled = true; 
                                Swal.fire({
                                  title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                  text: 'Daily Puzzle Pieces Rewarded!',
                                  confirmButtonText: 'Cool',
                                  confirmButtonColor: '#99C43C',
                                  allowOutsideClick: true,
                              });                              
                                break;
                              case 4:
                                this.updateUser(40);  
                                Swal.fire({
                                  title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                  text: 'Daily Puzzle Pieces Rewarded!',
                                  confirmButtonText: 'Cool',
                                  confirmButtonColor: '#99C43C',
                                  allowOutsideClick: true,
                              });
                                this.buttonDisabled = true;

                                break;
                              case 5:
                                this.updateUser(50);
                                Swal.fire({
                                  title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                  text: 'Daily Puzzle Pieces Rewarded!',
                                  confirmButtonText: 'Cool',
                                  confirmButtonColor: '#99C43C',
                                  allowOutsideClick: true,
                              });
                                this.buttonDisabled = true;
                                for (let index = 1; index <= 5; index++) {
                                  const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
                                                              }
                                  break;
                            
                            }
                          }
                          else 
                          {
                            console.log("start from begining");
                            this.dateCounter = 1;

                            this.db.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));

                            for (let index = 1; index <= 5; index++) {
                              const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
                                                          }
                            this.updateUser(10);
                            this.buttonDisabled = true;

                            Swal.fire({
                              title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                              text: 'Daily Puzzle Pieces Rewarded!',
                              confirmButtonText: 'Cool',
                              confirmButtonColor: '#99C43C',
                              allowOutsideClick: true,
                          });
    
                            // for (let index = 1; index <= inDateCount; index++) {
                            //   const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
                            //                               }
                          }
                          this.ngOnInit();
                        }
        
      }
  
}
          updateUser(num){
            this.user.puzzle_pieces += num;
              this.userService.updateUser(this.user);
          }


    onLastGameEvent() {
        this.onPlayGame(this.lastGame);

    }

    onPlayGame(game) {
        this.doLoading().then(() => {
            this.db.setItem('lastGame', JSON.stringify(game));
            this.router.navigate(
                ['play-game', { game: JSON.stringify(game) }],
                { replaceUrl: true }
            );
            this.loader.dismiss();
        });
    }
    loader;
    async doLoading() {
        this.loader = await this.loading.create({
            message: 'Loading...',
        });
        this.loader.present();
    }

    backToGame() {
        this.navCtrl.navigateBack(['filter']);
        
    }

}
