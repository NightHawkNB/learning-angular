import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
        previousPassword: new FormControl(''),
        newPassword: new FormControl(''),
        confirmPassword: new FormControl(''),
    });

    changePassword() {
        this.userService.changePassword(
            this.applyForm.value.previousPassword,
            this.applyForm.value.newPassword,
            this.applyForm.value.confirmPassword
        );
    }
}
