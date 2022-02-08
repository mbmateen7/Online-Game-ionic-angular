import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

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
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getRequest('shop/AllFilterList').subscribe((res: any) => {
      // this.spinnerDialog.show();
      console.log('All filters response')
      if (res.status) {
        this.filterList = [];
        this.secondaryFilterList = []
        for (let i = 0; i < res.message.length; i++) {
          if (res.message[i].type == 'primary') {
            this.filterList.push(res.message[i])
          }

          if (res.message[i].type == 'secondary') {
            this.secondaryFilterList.push(res.message[i])
          }
        }
        localStorage.setItem('filterList', JSON.stringify(this.filterList))
        localStorage.setItem('secondaryList', JSON.stringify(this.secondaryFilterList))
        console.log('SecondatyList', this.secondaryFilterList);
      }
      this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
        console.log('purchase detail reponse')
        this.ownedItemsList = res.message;
        localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList))
        // console.log('this.ownedItemsList', this.ownedItemsList);
        // this.isLoading = false;
        // this.spinnerDialog.hide();
      });
    })
  }

  setCurrentTab(e) {
    console.log('This is event', e.tab)
    this.activeTab = e.tab;
  }
}
