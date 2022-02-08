import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  shopList = []
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getRequest('shop/get-bundle-list').subscribe((res: any) => {
      console.log(res.data);
      this.shopList = res.data
    })
  }

  onBuyBundle(shop) {
    this.restService.postRequestToken('shop/purchase', { shop_id: shop.id }).subscribe((res: any) => {
      if (res.status) {
        Swal.fire({
          title: 'Success',
          text: 'You have successfully purchased',
          timer: 2000
        })
      }

    })
  }

}
