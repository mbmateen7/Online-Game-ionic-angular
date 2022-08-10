import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    // localUrl = environment.localUrl;
    localUrl = environment.stagingUrl;
    private headers;
    constructor(private http: HttpClient,
        private db:StorageService) {
    }

    postRequest(url: string, obj) {
        return this.http.post(this.localUrl + url, obj);
    }

    postRequestToken(url: string, obj) {
        return this.http.post(this.localUrl + url, obj);
    }
    resetPassword(url: string, obj: any) {

        return this.http.post(this.localUrl + url, obj, {

        });
    }

    putRequestToken(url: string, obj) {
        return this.http.put(this.localUrl + url, obj);

    }


    // this.db.getItem('user').then(res => {
    //     this.user= res
    // });

    getRequest(url: string) {
        return this.http.get(this.localUrl + url);
    }

    delRequest(url: string, obj) {
        return this.http.post(this.localUrl + url, obj);
    }

}
