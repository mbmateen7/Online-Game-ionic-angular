import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/service/audio.service';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  user;
  constructor(private router: Router, private restService: RestService, private audio: AudioService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  onLogout() {
    this.setLastLogin()
    localStorage.clear();
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    this.router.navigate(['/home'], { replaceUrl: true })

  }

  setLastLogin() {
    let date = new Date();
    const obj = {
      last_login: date
    }
    this.restService.postRequestToken('users/set-last-login', obj).subscribe((res: any) => {
      if (res.status) {
        console.log('Last login is set successfully');

      }
    })
  }
  changeSound(e) {
    if (e.detail.checked) {
      this.audio.playSound();
    } else this.audio.stopSound()

  }

  onUpdateProfile() {
    this.router.navigate(['/update-profile'])
    // console.log('---------------')
    // this.router.navigate(['../../update-profile'], { replaceUrl: true })
  }

  goToPurchaseDetails() {
    this.router.navigate(['/main/setting/purchase-container'])

  }
}
