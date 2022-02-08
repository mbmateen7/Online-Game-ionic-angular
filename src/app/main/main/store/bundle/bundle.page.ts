import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { IAPProduct, InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { Platform } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.page.html',
  styleUrls: ['./bundle.page.scss'],
})
export class BundlePage implements OnInit {


  data = [
    {
      name: '100 PuzzlePieces',
      image1: 'bundleshop.png',
      image2: 'buy099.png',
      selector: 'bundles', price: '$0.99'
    },
    {
      name: '550 PuzzlePieces',
      image1: 'bundleshop.png',
      image2: 'buy499.png',
      selector: 'bundles', price: '$4.99'
    },
    {
      name: '1,200 PuzzlePieces',
      image1: 'bundleshop.png',
      image2: 'buy999.png',
      selector: 'bundles', price: '$9.99'
    },
    {
      name: '2,600 PuzzlePieces',
      image1: 'bundleshop.png',
      image2: 'buy1999.png',
      selector: 'bundles', price: '$19.99'
    },
    {
      name: '7,000 PuzzlePieces',
      image1: 'bundleshop.png',
      image2: 'buy4999.png',
      selector: 'bundles', price: '$49.99'
    },
    {
      name: '15,000 PuzzlePieces',
      image1: 'bundleshop.png',
      image2: 'buy9999.png',
      selector: 'bundles', price: '$99.99'
    }
  ];

  constructor(private restService: RestService, public platform: Platform, private store: InAppPurchase2, private ref: ChangeDetectorRef) {
    this.platform.ready().then(() => {
      this.store.verbosity = this.store.DEBUG;

      this.registerProducts();
      this.setupListeners();
    })
  }

  ngOnInit() {

  }

  registerProducts() {
    let productIds = ['com.picplayce.game.100pp', 'com.picplayce.game.550pp', 'com.picplayce.game.1200pp',
      'com.picplayce.game.2600pp', 'com.picplayce.game.7000pp', 'com.picplayce.game.15000pp'];

    for (let i = 0; i < productIds.length; i++) {
      this.store.register({
        id: productIds[i],
        type: this.store.CONSUMABLE
      })
    }
    this.store.refresh();
  }

  setupListeners() {
    this.store.when('product')
      .approved((p: IAPProduct) => {
        // console.log('Approved', p);
        this.ref.detectChanges();
        return p.verify();
      }).verified((p: IAPProduct) => p.finish());
  }


  onBuyBundle(item) {
    let productId;
    let productIds = ['com.picplayce.game.100pp', 'com.picplayce.game.550pp', 'com.picplayce.game.1200pp',
      'com.picplayce.game.2600pp', 'com.picplayce.game.7000pp', 'com.picplayce.game.15000pp'];
    let comparison = ['100 PuzzlePieces', '550 PuzzlePieces', '1,200 PuzzlePieces', '2,600 PuzzlePieces', '7,000 PuzzlePieces', '15,000 PuzzlePieces'];
    for (let i = 0; i < 6; i++) {

      if (item == comparison[i]) {
        productId = productIds[i];
        console.log('tried to buy this', item, comparison[i], productId);
        ////alert(productId);
        break;
      }
    }

    // alert('Coming Soon!');
    this.buyItems(productId);
  }

  buyItems(productId) {
    this.store.order(productId).then(res => {
      console.log('THis is response of product purchase', res);
      productId = productId.split('com.picplayce.game.').pop();

      productId = productId.split('.');

      productId = productId[0].split('pp');

      productId = parseInt(productId[0]);

      this.purchaseItem('', productId, 'currency');

    }).catch((err) => {
      console.log('Error while purchase', err)
      alert('Please try again');
    });


  }

  purchaseItem(cost, itemName, type) {
    console.log('Item Name', itemName);




  }



}
