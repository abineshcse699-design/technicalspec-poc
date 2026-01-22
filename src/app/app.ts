import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tspec } from "./tspec/tspec";

import { MaterialRequiredComponent } from "./pages/s-page/s-page";
import { Hhh } from "./pages/hhh/hhh";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tspec, MaterialRequiredComponent, Hhh],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('technicalspec-poc');
}
