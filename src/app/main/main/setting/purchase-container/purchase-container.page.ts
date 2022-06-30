import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-purchase-container',
    templateUrl: './purchase-container.page.html',
    styleUrls: ['./purchase-container.page.scss'],
})
export class PurchaseContainerPage implements OnInit {
    segmentValue = 'filterList';
    constructor() {}

    ngOnInit() {}

    segmentChanged(ev: any) {
        this.segmentValue = ev.detail.value;
    }
}
