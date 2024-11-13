import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { user } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    //? Represents the data format collected from the form
    applyForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    //? Event for form submission
    submitApplication() {
        this.userService
            .saveUser(
                this.applyForm.value.username,
                this.applyForm.value.password
            )
            .subscribe((res: user) => {
                console.log(res);
            });
    }

    constructor(private userService: UserService) {}

    ngOnInit(): void {}
}
