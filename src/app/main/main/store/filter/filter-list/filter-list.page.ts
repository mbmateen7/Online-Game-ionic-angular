import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/service/storage.service';
import { RestService } from 'src/app/service/rest.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.page.html',
  styleUrls: ['./filter-list.page.scss'],
})
export class FilterListPage implements OnInit {

  filterList;
  ownedItemsList;
  sortedFilterList = [];
  user;
  constructor(private db:StorageService,private restService: RestService, private userService: UserService, private navCtrl: NavController) { }

  ngOnInit() {
  }


  compare(a, b) {
    if (a.isPurchased > b.isPurchased) {
      return -1;
    }
    if (a.isPurchased < b.isPurchased) {
      return 1;
    }
    return 0;
  }

  ionViewDidEnter() {
    // this.user = JSON.parse(localStorage.getItem('user'));
    this.db.getItem('user').then(res => {
      this.user= res
  });
    // this.filterList = JSON.parse(localStorage.getItem('filterList'));
    this.db.getItem('filterList').then(res => {
      this.filterList= res
  });
    // this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'))
    this.db.getItem('ownedItemsList').then(res => {
      this.ownedItemsList= res
  });
    let ownedFilterIds = [];
    for (let i = 0; i < this.ownedItemsList.length; i++) {
      if (this.ownedItemsList[i].filter_id) {
        ownedFilterIds.push(this.ownedItemsList[i].filter_id)
      }
    }

    for (let i = 0; i < this.filterList.length; i++) {
      if (ownedFilterIds.includes(this.filterList[i].id)) {
        this.filterList[i].isPurchased = 1;
        this.sortedFilterList.push(this.filterList[i])
      }
      else {
        this.filterList[i].isPurchased = 0;
        this.sortedFilterList.push(this.filterList[i])

      }
    }
    // console.log('this.sortedFilterList', this.sortedFilterList);
    this.sortedFilterList.sort(this.compare);
    // console.log('this.sortedFilterList', this.sortedFilterList);

  }

  onBuyPrimaryFilter(filter) {
    if (filter.isPurchased) {
      Swal.fire({
        title: 'Error',
        text: 'You have already purchased the filter'
      })
      return
    }
    let filterObj = {
      shop_id: filter.shop_id,
      filter_id: filter.id
    }
    this.restService.postRequestToken('shop/purchase', filterObj).subscribe((res: any) => {
      if (res.status) {
        this.getOwnedItemList();
        let filterObj = {
          shop_id: null,
          filter_id: null
        }
        Swal.fire({
          title: 'Success',
          text: 'You have successfully purchased the filter'
        })
      }
    })
    this.user.puzzle_pieces = this.user.puzzle_pieces - 3000;
    this.userService.updateUser(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.navCtrl.navigateBack('/main/store');
  }

  getOwnedItemList() {
    this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
      this.ownedItemsList = res.message;
      localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList))

    });
  }
}
