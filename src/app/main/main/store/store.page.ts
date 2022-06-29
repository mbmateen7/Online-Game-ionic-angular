import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { endAt } from 'firebase/firestore';
import { UserService } from 'src/app/service/user.service';
import { FilterPage } from './filter/filter.page';

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
  lastClaimDate;
  isFilterOpened = true;
  isItemOpened = false;
  isBundleOpened = false;
  filterPage: boolean = false
  filterData;
  @ViewChild(FilterPage) child;
  userData;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userService.userSourceValue
    this.userService.userData.subscribe(res => {
      console.log(res);
      this.user = JSON.parse(res);
    })
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    // this.lastClaimDate = localStorage.getItem('LastLoginClaim');
    //  let ClaimDate = JSON.parse(this.lastClaimDate);

    //   let inDateCount = ClaimDate.dateCount;
    //   for (let index = 1; index <= inDateCount; index++) {
    //     const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
    //   }

  }

  ionViewWillEnter() {
    this.filterData = JSON.parse(this.route.snapshot.queryParamMap.get('filterData'));
    console.log('FilterData', this.filterData)
    this.filterPage = this.filterData.id ? true : false
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

     this.lastClaimDate = localStorage.getItem('LastLoginClaim');
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
      localStorage.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));
      this.lastClaimDate = localStorage.getItem('LastLoginClaim');
      let ClaimDate = JSON.parse(this.lastClaimDate);
      let savedClaimDate =  (this.lastLogin).getDate();
      let lastSavedClaimDate = (new Date(ClaimDate.date).getDate());
      

  
      if ( lastSavedClaimDate == savedClaimDate)
      {
        console.log("i got 10 points in if");
        this.updateUser(10);
      }
     
    }
    else 
    {
              console.log("else");
              let ClaimDate = JSON.parse(this.lastClaimDate);
              let signInUser = this.user.id;
              let localsignedUser = ClaimDate.userId;
                if (signInUser != localsignedUser)
                {
                  this.dateCounter = 1;
                  localStorage.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));
                  this.lastClaimDate = localStorage.getItem('LastLoginClaim');
                  let ClaimDate = JSON.parse(this.lastClaimDate);
                  let savedClaimDate =  (this.lastLogin).getDate();
                  let lastSavedClaimDate = (new Date(ClaimDate.date).getDate());
                  
            
                    
                        if ( lastSavedClaimDate == savedClaimDate)
                        {
                          console.log("i got 10 points in if");
                          this.updateUser(10);
                        }
                }
                else {
              
              
                      this.lastClaimDate = localStorage.getItem('LastLoginClaim');
                      let ClaimDate = JSON.parse(this.lastClaimDate);

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
                          localStorage.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));
                            
                            console.log("counter in else if"+this.dateCounter);
                               for (let index = 1; index <= inDateCount; index++) {
                                    const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
                                                                }

                            switch (this.dateCounter) {
                              case 1:
                                this.updateUser(10);
                                break;
                              case 2:
                                this.updateUser(20);                                
                                break;
                              case 3:
                                this.updateUser(30);                                
                                break;
                              case 4:
                                this.updateUser(40);                                
                                break;
                              case 5:
                                this.updateUser(50);
                                  break;
                            
                            }
                          }
                          else 
                          {
                            console.log("start from begining");
                            this.dateCounter = 1;

                            localStorage.setItem('LastLoginClaim',JSON.stringify({date:this.lastLogin,dateCount:this.dateCounter, userId:this.user.id}));

                            this.updateUser(10);
                            for (let index = 2; index <= 5; index++) {
                              const element = document.getElementById('claim-image-'+index).style.opacity='1';
                                                          }
                            // this.updateUser(10);
                            // for (let index = 1; index <= inDateCount; index++) {
                            //   const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
                            //                               }
                          }
                        }
        
      }
  
}
          updateUser(num){
            this.user.puzzle_pieces += num;
              this.userService.updateUser(this.user);
          }
}
