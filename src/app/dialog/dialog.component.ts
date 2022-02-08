import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>Error!</h5></div>',
      text: 'User name or Password is wrong',
      confirmButtonText: 'OK',
      confirmButtonColor: '#99C43C',
      allowOutsideClick: true,
      // backdrop: true,
    })
  }

}
