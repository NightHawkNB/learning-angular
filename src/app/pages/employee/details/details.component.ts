import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.params['id']);
    this.userService.getSingleUser(this.userId).subscribe((res : user) => {
      this.user = res;
    });
  }

  userId = 0;

  //? Variable to contain the user data
  public user!: user;

}
