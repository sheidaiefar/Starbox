import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Collection } from 'src/app/_core/models/user';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dataSource:any = [];
  list: any = [];
  displayedColumns: string[] = [ 'name', 'genre', 'releaseDate', 'edit'];
  @ViewChild(MatTable) table!: MatTable<Collection>;

  constructor(
    public userService: UserService,
    public auth: AuthenticationService
  ) {
    this.getValues();
  }

  getValues() {
    this.userService.getAll().subscribe((res) => {
      let users = res;
      users.forEach((user) => {
        user.collection?.forEach((item) => {
          this.list.push(item);
        });

      });
      this.dataSource = [...this.list];
    });
  }

  isMine(item:Collection){
       let currentUser = this.auth.userValue;
            if(item.owner == currentUser?.id ){
            return true
          }
            return false;
  }

}
