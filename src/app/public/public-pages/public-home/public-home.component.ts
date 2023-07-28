import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/_core/models/user';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css'],
})
export class PublicHomeComponent {
  users!: any;

  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe((res) => {      
      this.users=res;
      console.log(this.users);
    });
  }

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
