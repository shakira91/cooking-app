import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navItemSelected = new EventEmitter<string>(); 
  currentPage = 'Recipes';

  navigationItemClicked(chosen: string) {
  	this.navItemSelected.emit(chosen); 
  	this.currentPage = chosen;
  	alert("this page is" + this.currentPage);
  }

  constructor() { }

  ngOnInit() {
  }

}
