import {Component, ViewChild} from '@angular/core';
import {Collection} from "../../../../_core/models/user";
import {MatTable} from "@angular/material/table";
import {UserService} from "../../../../_core/services/user.service";
import {AuthenticationService} from "../../../../_core/services/authentication.service";

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent {

  dataSource :Collection[] =[];
  displayedColumns: string[] = ['id', 'name', 'genre', 'releaseDate' , 'edit'];

  @ViewChild(MatTable) table!: MatTable<Collection>;

   constructor(
     public userService: UserService,
     public auth: AuthenticationService,
     ) {
     let currentUser = this.auth.userValue;
     if(currentUser){
      this.userService.getUserCollection( +currentUser?.id ).subscribe(
        res=>{
           res? this.dataSource= res:[];
        })
     }





   }

}
