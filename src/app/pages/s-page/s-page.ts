import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-required',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatRadioModule,
    MatCardModule
  ],
  templateUrl: './s-page.html'
})
export class MaterialRequiredComponent {

  // ================= Sidebar =================
  chapters = [
    { id: '01', label: 'Subject' },
    { id: '02', label: 'Material', active: true },
    { id: '03', label: 'Examination' },
    { id: '04', label: 'Assessment' },
    { id: '05', label: 'Grouping' },
    { id: '06', label: 'Characteristics' }
  ];

  // ================= Form State =================
  form = {
    seedOption: '',
    growingCycle: 'two',
    cycleType: 'single-planting',
    satisfactoryCrop: 'yes',
    fruitType: 'evergreen'
  };

  // ================= Radio Options =================
  seedOptions = [
    {
      value: 'seed-only',
      label: 'Test Guidelines which only apply to seed-propagated varieties'
    },
    {
      value: 'all-varieties',
      label: 'Test Guidelines which apply to all varieties'
    }
  ];

  growingCycles = [
    { value: 'single', label: 'Single growing cycle' },
    { value: 'two', label: 'Two independent growing cycles' }
  ];

  cycleTypes = [
    { value: 'separate', label: 'Two separate plantings' },
    { value: 'single-planting', label: 'Single planting' }
  ];

  fruitTypes = [
    { value: 'dormant', label: 'Dormant period (ASW3(a))' },
    { value: 'no-dormant', label: 'No dormant period (ASW3(b))' },
    { value: 'evergreen', label: 'Evergreen (ASW3(c))' }
  ];
}
