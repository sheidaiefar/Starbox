import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from 'src/app/account/services/account.service';

@Component({
  selector: 'work-space-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output('menuToggle') menuToggle = new EventEmitter();

  constructor(private accountService: AccountService) {}

  onMenuBtnclick() {
    this.menuToggle.emit();
  }

  logout() {
    this.accountService.logout();
  }
}
