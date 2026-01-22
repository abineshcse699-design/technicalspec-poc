import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tspec } from "./tspec/tspec";

import { MaterialRequiredComponent } from "./pages/s-page/s-page";
import {  HhhComponent } from "./pages/hhh/hhh";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('technicalspec-poc');
}
