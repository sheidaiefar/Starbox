import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Collection } from '../../../../_core/models/user';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../../../_core/services/user.service';
import { AuthenticationService } from '../../../../_core/services/authentication.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css'],
})
export class CollectionListComponent {
  dataSource: Collection[] = [];
  displayedColumns: string[] = [ 'name', 'genre', 'releaseDate', 'edit'];

  @ViewChild(MatTable) table!: MatTable<Collection>;
  filteredList: Collection[] = [];

  constructor(
    public userService: UserService,
    public auth: AuthenticationService,
    private cdf: ChangeDetectorRef
  ) {
    this.getValues();
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
    this.filteredList = [];
    const filterValue = this._normalizeValue(
      (event.target as HTMLInputElement).value
    );

    if(filterValue.length==0){
       this.getValues();
    }

    if (this.dataSource.length > 1) {
      this.filteredList = this.dataSource.filter((movie) =>
        this._normalizeValue(movie.name).includes(filterValue)
      );
    }
    this.dataSource = [...this.filteredList];
    return this.dataSource;
  }

  _normalizeValue(value: string | undefined): string {
    return value ? value.toLowerCase().replace(/\s/g, '') : '';
  }
}
