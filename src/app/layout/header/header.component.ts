import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private _title: string;

  constructor(private router: Router) {
    this._title = 'Petinder'
  }

  get title(): string {
    return this._title;
  }

  gallery() {
    this.router.navigateByUrl('');
  }

  add() {
    this.router.navigateByUrl('add');
  }

  login() {
    this.router.navigateByUrl('login');
  }
}
