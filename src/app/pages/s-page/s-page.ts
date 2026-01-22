import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';

  @Component({
  selector: 'app-material-required',
  standalone: true,
  imports: [
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './s-page.html'
})
export class MaterialRequiredComponent  {




   seedOption: string | null = null;

   growingCycle = 'two';
  cycleType = 'single-planting';
  satisfactoryCrop = 'yes';
  fruitType = 'evergreen';

  }
