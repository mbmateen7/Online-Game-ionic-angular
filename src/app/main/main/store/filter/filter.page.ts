import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
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

  ) {

  }

  filterData = null;


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    // console.log('getFilterData', this.getFilterData)
  }



  getOwnedItemList() {
    this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
      this.ownedItemsList = res.message;
      localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList))

    });
  }

  onBuyPrimaryFilter() {

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
        localStorage.setItem('user', JSON.stringify(this.user))
        this.navCtrl.navigateBack('filter');
      } else {
        this.navCtrl.navigateForward('main/store/filter/filter-list')
      }



    }
    else {

      Swal.fire({
        title: 'Error',
        text: 'You Donot have enough puzzle pieces. want to buy?'
      }).then(res => {
        if (res.isConfirmed) {
          this.messageEvent.emit(true)
        }

      })

    }

  }


}
