import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RestService } from 'src/app/service/rest.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-send-game',
  templateUrl: './send-game.page.html',
  styleUrls: ['./send-game.page.scss'],
})
export class SendGamePage implements OnInit {

  puzzleImage;
  gameObj = null;
  hintWord = null;
  constructor(private route: ActivatedRoute, private restService: RestService, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.puzzleImage = localStorage.getItem('puzzleImage');
    this.gameObj = JSON.parse(this.route.snapshot.paramMap.get('gameObj'));
  }

  ionViewWillEnter() {
    Swal.fire({
      title: '<h5>Please enter your puzzle word (4 Characters)</h5>',
      input: 'text',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
        if (value.includes(' ')) {
          return 'Spaces are not allowed'
        }
        if (value.length > 4) {
          return 'Maximum 4 Characters Allowed'
        }
      },
      confirmButtonText: 'SEND GAME',
      confirmButtonColor: '#99C43C',
      allowOutsideClick: true,
      // backdrop: true,
    }).then(res => {
      this.gameObj.word = res.value
      if (res.isConfirmed) {
        this.onSendGame();
      }
    })
  }

  onSendGame() {
    this.restService.postRequestToken('games/send-game', this.gameObj).subscribe(res => {
      localStorage.setItem('puzzleImage', null);
      localStorage.setItem('base64String1', null)
      localStorage.setItem('base64String2', null)
    })

    Swal.fire({
      title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Sucess!</h5></div>',
      text: 'Game has been sent',
      confirmButtonText: 'OK',
      confirmButtonColor: '#99C43C',
      allowOutsideClick: true,
      // backdrop: true,
    }).then(res => {
      this.navCtrl.setDirection('root');
      this.router.navigate(['/main/game', { gameSent: true}])
    });
  }

  sendGameGoBtn(e) {
    this.onSendGame();
  }

}
