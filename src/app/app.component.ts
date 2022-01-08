import {  HostBinding } from '@angular/core';
import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;


  userMenuItems = [{
    text: 'Profile',
    icon: 'user',

  },
  {
    text: 'Logout',
    icon: 'runner',

  }];

  constructor() { }

  ngOnInit() {

  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}
