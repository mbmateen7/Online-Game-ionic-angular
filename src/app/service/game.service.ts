import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Subject } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private restService: RestService) { }

  getGameList() {
    return this.restService.getRequest('games/get-game');
  }

  getUserDetail() {
    return this.restService.getRequest('users/detail')
  }



  getClaimList() {

    return this.restService.getRequest('claim/claim-list');
  }






}
