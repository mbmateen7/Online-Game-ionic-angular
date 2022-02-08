import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  ownedItemsList;
  primayFilterRemovalList;
  secondaryFilterRemovalList;
  addTurn;
  revealList
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
      this.ownedItemsList = res.message;

      this.primayFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 3);
      this.secondaryFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 4);
      this.addTurn = this.ownedItemsList.filter(x => x.shop_id == 5);
      this.revealList = this.ownedItemsList.filter(x => x.shop_id == 6);
      console.log('this.primayFilterRemovalList', this.primayFilterRemovalList);
      console.log('this.secondaryFilterRemovalList', this.secondaryFilterRemovalList);
      console.log('this.addTurn', this.addTurn);
      console.log('this.revealList', this.revealList);
    })



  }

}
