import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { RestService } from 'src/app/service/rest.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-item',
    templateUrl: './item.page.html',
    styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
    user;
    @Input() getFilterData;
    @Output() messageEvent = new EventEmitter<boolean>();
    ownedItemsList;
    shopList = [];
    constructor(
        private restService: RestService,
        private userService: UserService,
        private db:StorageService
    ) {}

    ngOnInit() {
        // this.user = JSON.parse(localStorage.getItem('user'));
        this.db.getItem('user').then(res => {
            this.user= res
        });
        this.restService
            .getRequest('shop/get-bundle-list')
            .subscribe((res: any) => {
                this.shopList = res.data;
            });
    }

    onBuyBundle(shop) {
        if (this.user.puzzle_pieces > shop.price) {
            this.restService
                .postRequestToken('shop/purchase', { shop_id: shop.id })
                .subscribe((res: any) => {
                    if (res.status) {
                        this.getOwnedItemList();
                        Swal.fire({
                            title: 'Success',
                            text: 'You have successfully purchased',
                            timer: 2000,
                        });
                    }
                });
            this.user.puzzle_pieces = this.user.puzzle_pieces - shop.price;
            this.userService.updateUser(this.user);
            this.db.setItem('user', JSON.stringify(this.user));
        } else {
            Swal.fire({
                title: 'Error',
                text: 'You don’t have enough puzzle pieces to purchase this item',
            }).then((res) => {
                if (res.isConfirmed) {
                    this.messageEvent.emit(true);
                }
            });
        }
    }

    getOwnedItemList() {
        this.restService
            .getRequest('shop/purchase-detail')
            .subscribe((res: any) => {
                this.ownedItemsList = res.message;
                this.db.setItem(
                    'ownedItemsList',
                    JSON.stringify(this.ownedItemsList)
                );
            });
    }
}
