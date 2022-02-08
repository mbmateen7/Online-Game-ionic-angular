import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FilterPage } from './filter/filter.page';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  user;
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
}
