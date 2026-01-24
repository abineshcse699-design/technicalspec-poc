import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tspec } from "./tspec/tspec";

import { MaterialRequiredComponent } from "./pages/s-page/s-page";
import {  HhhComponent } from "./pages/hhh/hhh";
import { Header } from "./pages/header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {

  protected readonly title = signal('technicalspec-poc');

}
