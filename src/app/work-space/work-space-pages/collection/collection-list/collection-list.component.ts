import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Collection } from '../../../../_core/models/user';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../../../_core/services/user.service';
import { AuthenticationService } from '../../../../_core/services/authentication.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css'],
})
export class CollectionListComponent implements OnInit {
  dataSource: Collection[] = [];
  displayedColumns: string[] = ['id', 'name', 'genre', 'releaseDate', 'edit'];

  @ViewChild(MatTable) table!: MatTable<Collection>;
  filteredList: Collection[] = [];

  list = new MatTableDataSource(this.dataSource);

  constructor(
    public userService: UserService,
    public auth: AuthenticationService,
    private cdf: ChangeDetectorRef
  ) {
    this.getValues();
  }

  ngOnInit() {
    this.getValues();
  }

  markForCheck() {
    this.cdf.markForCheck();
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
    this.getValues();
    this.filteredList = [];
    const filterValue = this._normalizeValue(
      (event.target as HTMLInputElement).value
    );

    if (this.dataSource.length > 1) {
      this.filteredList = this.dataSource.filter((movie) =>
        this._normalizeValue(movie.name).includes(filterValue)
      );
    }

    return (this.dataSource = [...this.filteredList]);
  }

  _normalizeValue(value: string | undefined): string {
    return value ? value.toLowerCase().replace(/\s/g, '') : '';
  }
}
