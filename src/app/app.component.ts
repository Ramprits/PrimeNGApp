import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Menu } from 'primeng/components/menu/menu';
import { ActivatedRoute, Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'yo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'yo';
  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu: Menu;
  @ViewChild('smallMenu') smallMenu: Menu;
  ngOnInit() {
    const handleSelected = function (event) {
      const allMenus = jQuery(event.originalEvent.target).closest('ul');
      const allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass('menu-selected');
      const selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    };
    this.menuItems = [
      { label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'], command: (event) => handleSelected(event) },
      { label: 'All Times', icon: 'fa-calendar', routerLink: ['/alltimes'], command: (event) => handleSelected(event) },
      { label: 'Customer', icon: 'fa-tasks', routerLink: ['/customers'], command: (event) => handleSelected(event) },
      { label: 'My Profile', icon: 'fa-users', routerLink: ['/profile'], command: (event) => handleSelected(event) },
      { label: 'Employee', icon: 'fa-sliders', routerLink: ['/employees'], command: (event) => handleSelected(event) },
    ];
    this.miniMenuItems = [];
    this.menuItems.forEach((item: MenuItem) => {
      const miniItem = { icon: item.icon, routerLink: item.routerLink };
      this.miniMenuItems.push(miniItem);
    });


  }
  selectInitialMenuItemBasedOnUrl() {
    const path = document.location.pathname;
    const menuItem = this.menuItems.find((item) => item.routerLink[0] === path);
    if (menuItem) {
      const selectedIcon = this.bigMenu.container.querySelector(`.${menuItem.icon}`);
      jQuery(selectedIcon).closest('li').addClass('menu-selected');
    }
  }
  ngAfterViewInit() {
    this.selectInitialMenuItemBasedOnUrl();
  }
}
