import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
    constructor(private userService: UserService) {}

    ngOnInit(): void {}

    applyForm = new FormGroup({
        previousPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
    });

    changePassword() {
        this.userService.changePassword(
            this.applyForm.value.previousPassword,
            this.applyForm.value.newPassword,
            this.applyForm.value.confirmPassword
        );
    }
}
