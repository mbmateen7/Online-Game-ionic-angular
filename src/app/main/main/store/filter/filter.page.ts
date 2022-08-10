import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { StorageService } from 'src/app/service/storage.service';
import { RestService } from 'src/app/service/rest.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  user;
  @Input() getFilterData;
  @Output() messageEvent = new EventEmitter<boolean>();
  ownedItemsList;
  constructor(private route: ActivatedRoute,
    private restService: RestService,
    private userService: UserService,
    private navCtrl: NavController,
    private router: Router,
    private db: StorageService

  ) {

  }

  filterData = null;


  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem('user'));
    this.db.getItem('user').then(res => {
      this.user= res
  });
    // console.log('getFilterData', this.getFilterData)
  }



  getOwnedItemList() {
    this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
      this.ownedItemsList = res.message;
      this.db.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList))

    });
  }

  onBuyFilter() {

    if (this.user.puzzle_pieces > 3000) {

      if (this.getFilterData?.shop_id && this.getFilterData?.id) {
        let filterObj = {
          shop_id: this.getFilterData.shop_id,
          filter_id: this.getFilterData.id
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
        this.db.setItem('user', JSON.stringify(this.user))
        this.navCtrl.navigateBack('filter');
      } else {
        this.navCtrl.navigateForward('main/store/filter/filter-list')
      }



    }
    else {

      Swal.fire({
        title: 'Error',
        text: 'You don’t have enough puzzle pieces to purchase this item'
      }).then(res => {
        if (res.isConfirmed) {
          this.messageEvent.emit(true)
        }

      })

    }

  }


}
