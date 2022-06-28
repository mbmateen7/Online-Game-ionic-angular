import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
    loading: boolean;
    constructor(private _loading: LoadingService) {
        this._loading.isLoading.subscribe((v) => {
            this.loading = v;
        });
    }

    ngOnInit() { }

}
