import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-update-profile',
    templateUrl: './update-profile.page.html',
    styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
    profileForm;
    pfCheckBox;
    showSignUpLoader = false;
    user;

    constructor(private restService: RestService, private router: Router) {}

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));

        this.pfCheckBox = false;
        this.profileForm = new FormGroup({
            // user_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
            // email: new FormControl('', [Validators.required, Validators.email]),
            // password: new FormControl('', [
            //   Validators.required,
            //   Validators.minLength(6),
            // ]),
            referal_code: new FormControl(''),
            phone_number: new FormControl(''),
        });
        this.profileForm.patchValue({
            // user_name: this.user.user_name,
            // email: this.user.email,
            phone_number: this.user.phone_number,
        });
    }

    getProfileFormError() {
        return this.profileForm.controls;
    }

    onSignUp() {
        this.showSignUpLoader = true;

        this.restService
            .putRequestToken('users/update', this.profileForm.value)
            .subscribe(
                (res: any) => {
                    if (res) {
                        Swal.fire({
                            title: '<div><h5>Success!</h5></div>',
                            text: 'Updated',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#99C43C',
                        });
                        // console.log('This is res', res.data);
                        // localStorage.setItem('token', res.token);
                        // localStorage.setItem('user', JSON.stringify(res.data));
                        this.showSignUpLoader = false;
                        this.router.navigate(['main/setting']);
                    }
                },
                (err) => {
                    this.showSignUpLoader = false;
                    // console.log('This is error', err.error);
                    Swal.fire({
                        title: '<div><h5>Error!</h5></div>',
                        html: err.error,
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#99C43C',
                    });
                }
            );
    }

    onClick(x) {
        // this.pfCheckBox = !this.pfCheckBox;
        this.pfCheckBox = x.detail.checked;
        // console.log('====>', x.detail.checked);
    }

    onGoToSettingPage() {
        this.router.navigate(['main/setting']);
    }
}
