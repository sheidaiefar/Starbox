import { Component, OnInit, ViewChild } from '@angular/core';
import { Collection } from '../../../../_core/models/user';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../../../_core/services/user.service';
import { AuthenticationService } from '../../../../_core/services/authentication.service';
import { FormControl } from '@angular/forms';
import { Observable, startWith } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css'],
})
export class CollectionListComponent implements OnInit {
  dataSource: Collection[] = [];
  displayedColumns: string[] = ['id', 'name', 'genre', 'releaseDate', 'edit'];

  @ViewChild(MatTable) table!: MatTable<Collection>;
  control = new FormControl('');
  collectionList: any = [];
  filteredCollection!: Observable<string[]>;

  list = new MatTableDataSource(this.dataSource);

  constructor(
    public userService: UserService,
    public auth: AuthenticationService
  ) {
    this.getValues();
  }

  ngOnInit() {
    this.getValues();

    //@ts-ignore
    this.filteredCollection = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  getValues() {
    let currentUser = this.auth.userValue;
    if (currentUser) {
      this.userService.getUserCollection(+currentUser?.id).subscribe((res) => {
        res ? (this.dataSource = res) : [];
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource = this.dataSource.filter((item) => {
      this.dataSource.forEach((x) => {
        x.name?.toLowerCase().includes(filterValue);
      });
    });
  }

  _filter(value: string): (string | undefined)[] {
    const filterValue = this._normalizeValue(value);
    //@ts-ignore
    return this.collectionList.filter((movie) =>
      this._normalizeValue(movie).includes(filterValue)
    );
  }

  _normalizeValue(value: string | undefined): string {
    return value ? value.toLowerCase().replace(/\s/g, '') : '';
  }
}
