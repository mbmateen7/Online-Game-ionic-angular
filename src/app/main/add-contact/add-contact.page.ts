import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Contacts,
  Contact,
  ContactField,
  ContactName,
} from '@ionic-native/contacts/ngx';
import { AlertController } from '@ionic/angular';
import { RestService } from 'src/app/service/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  contactList: any[] = [];

  showUserList = false;

  usernameSearchRes = [];

  constructor(private contacts: Contacts, private restSerice: RestService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(obj, headerText, headerBody) {
    const friendDialogbutton = [
      {
        text: 'No',
        role: 'no',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'yes',
        handler: () => {

          this.addFriendNameByUsername(obj)
        }
      }
    ]


    const resDialogbutton = [
      {
        text: 'OK',
      }
    ]
    let buttonArr = [];

    if (obj) { buttonArr = friendDialogbutton } else { buttonArr = resDialogbutton }

    const alert = await this.alertController.create({
      header: headerText,
      subHeader: headerBody,


      buttons: buttonArr
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onImportContacts() {
    this.contacts.find(['displayName']).then(async (res: any) => {
      const list = await res;
      this.getNumbersArrayOnly(list);

    });
  }

  getNumbersArrayOnly(list) {
    for (const element of list) {
      if (element.phoneNumbers) {
        element.phoneNumbers.forEach(el => {
          if (el.value.replace(/ /g, '')) {
            const str = el.value.replace(/ /g, '');
            this.contactList.push(str);
          }
        });
      }
    }

    this.checkContactFromServer(JSON.stringify(this.contactList));

  }

  checkContactFromServer(list) {
    this.restSerice
      .postRequestToken('contacts/contact-exist', { contacts_array: list })
      .subscribe((res) => {
        const contactList = JSON.stringify(res['save_contacts']);
        this.router.navigate(['/main/freind', { user: contactList }]);
      });
  }

  onSearchByUsername(e) {
    let username = e.target.value
    this.showUserList = true;
    const searchObj = {
      user_name: username
    }
    this.restSerice.postRequestToken('users/user-name', searchObj).subscribe((res: any) => {
      this.usernameSearchRes = res.user;
      // console.log('====>', this.usernameSearchRes);


    })

  }

  onCancelSearch() {
    this.showUserList = false;
  }

  openDialogBox(obj) {
    Swal.fire({
      text: "Are you want to add as friend ",
      confirmButtonText: "Yes",
      confirmButtonColor: "#99C43C",
      showCancelButton: true,
      allowOutsideClick: false,
      cancelButtonColor: "#E86B5D",
      cancelButtonText: "Cancel",
    }).then(res => {
      if (res.isConfirmed) {
        this.addFriendNameByUsername(obj)
      }
    })
  }

  addFriendNameByUsername(obj) {
    this.restSerice.postRequestToken('contacts/add-username', { friend_id: obj.id }).subscribe((res: any) => {

      this.showUserList = false;
      Swal.fire({
        title: 'Success',
        text: res.message,
        confirmButtonText: "Cool",
      })
      this.router.navigate(['/main/freind', { addFriend: true }], { replaceUrl: true })
    })
  }


}



