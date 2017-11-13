import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'cat-sidenav',
    templateUrl: './co_sidenav.html',
    styleUrls: ['./co_sidenav.css']
})
export class SidenavComponent {
    @Input() isOpen: boolean;

    @ViewChild('sidenav') sidenav;
    @Output() closed = new EventEmitter();

    closeSidenav() {
      this.sidenav.close();
      // send message to AppContainer to toggle
      this.closed.emit();
    }
}