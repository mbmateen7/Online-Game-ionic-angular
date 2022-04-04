import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // localUrl = environment.localUrl;
  localUrl = environment.stagingUrl;
  private headers;
  constructor(private http: HttpClient) {
  }

  postRequest(url: string, obj) {
    return this.http.post(this.localUrl + url, obj);
  }

  postRequestToken(url: string, obj) {

    return this.http.post(this.localUrl + url, obj, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
  }
  resetPassword(url: string, obj: any) {

    return this.http.post(this.localUrl + url, obj, {

    });
  }

  putRequestToken(url: string, obj) {
    return this.http.put(this.localUrl + url, obj, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
  }

  getRequest(url: string) {
    return this.http.get(this.localUrl + url, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
  }

  delRequest(url: string, obj) {
    return this.http.post(this.localUrl + url, obj, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
  }

}
