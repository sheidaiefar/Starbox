import {Component, ViewChild} from '@angular/core';
import {Collection} from "../../../../_core/models/user";
import {MatTable} from "@angular/material/table";

const ELEMENT_DATA: Collection[] = []

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent {
  dataSource = [...ELEMENT_DATA];
  displayedColumns: string[] = ['id', 'name', 'genre', 'releaseDate' , 'edit'];

  @ViewChild(MatTable) table!: MatTable<Collection>;
}
