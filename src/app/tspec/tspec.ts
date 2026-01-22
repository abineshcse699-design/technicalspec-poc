import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-tspec',

  standalone: true,

  imports: [
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule

  ],

  templateUrl: './tspec.html',
  styleUrls: ['./tspec.css']

})

export class Tspec {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      asterics: [true],
      grouping: [true],
      tq5: [true],

      characteristicName: ['Leaf: length'],
      typeOfExpression: ['QN'],
      growthStage: ['00'],

      MG: [true],
      MS: [true],
      VG: [false],
      VS: [false],
      OTHER: [false],

      mgSelect: [''],
      msSelect: [''],
    });

  }

  

}

