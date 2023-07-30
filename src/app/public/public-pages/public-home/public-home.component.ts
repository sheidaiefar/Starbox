import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Collection, User } from 'src/app/_core/models/user';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css'],
})
export class PublicHomeComponent implements OnInit {
  imageUrl="./../../../assets/Films.jpg"
  users!: User[];
  folders: Collection[] = [];
  UserFolders?: Collection[] = [];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
      this.users.forEach((user) => {
        if (user.collection) {
          this.UserFolders = this.getFolder(user);
          this.UserFolders?.forEach((x) => {
            if (!this.folders.includes(x)) {
              this.folders.push(x);
            }
          });
        }
      });
    });
  }

  getFolder(user: User) {
    return user.collection;
  }
}
