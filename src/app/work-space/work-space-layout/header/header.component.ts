import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'work-space-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output('menuToggle') menuToggle = new EventEmitter();

  constructor() { }

  onMenuBtnclick(){
    this.menuToggle.emit();
  }
}
