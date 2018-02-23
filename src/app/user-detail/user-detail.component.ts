import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

}
