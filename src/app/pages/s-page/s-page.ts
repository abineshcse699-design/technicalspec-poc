import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import{MatFormFieldModule} from '@angular/material/form-field';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";


@Component({
  selector: 'app-s-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatNavList,
    FormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    Header,
    Footer
],
  templateUrl: './s-page.html',
  styleUrls: ['./s-page.css']
})
export class SPageComponent {

    isExpanded = false;
    showSubjectOnly = false;
    showMaterialOnly = false;
    showExaminationOnly = false;

  // =================================================
  // SIDEBAR : CHAPTERS
  // =================================================
  chapters = [
    { id: '01', label: 'Subject', active: false },
    { id: '02', label: 'Material', active: true },
    { id: '03', label: 'Examination', active: false },
    { id: '04', label: 'Assessment', active: false },
    { id: '05', label: 'Grouping', active: false },
    { id: '06', label: 'Characteristics', active: false },
    { id: '07', label: 'Table of characteristics', active: false },
    { id: '08', label: 'Explanations', active: false },
    { id: '09', label: 'Literature', active: false },
    { id: '10', label: 'Technical Questionnaire', active: false },
    { id: '11', label: 'Annex', active: false }
  ];

  setActiveChapter(selected: Chapter): void {
    this.chapters.forEach(ch => (ch.active = false));
    selected.active = true;
    // If Subject is clicked, show only subject section
    if (selected.label === 'Subject') {
      this.showSubjectOnly = true;
      this.showMaterialOnly = false;
      this.showExaminationOnly = false;
    } else if (selected.label === 'Material') {
      this.showMaterialOnly = true;
      this.showSubjectOnly = false;
      this.showExaminationOnly = false;
    } else if (selected.label === 'Examination') {
      this.showExaminationOnly = true;
      this.showSubjectOnly = false;
      this.showMaterialOnly = false;
    } else {
      this.showSubjectOnly = false;
      this.showMaterialOnly = false;
      this.showExaminationOnly = false;
    }


  }

  // =================================================
  // SECTION 2 : Material Required
  // =================================================

  sectionTitle1 = '1. Subject of the Test Guidelines';
  sectionTitle = '2. Material Required';

  panels: PanelConfig[] = [
    {
      id: '2.1',
      title: '2.1 Title text',
      expanded: false,
      type: 'empty'
    },
    {
      id: '2.2',
      title: '2.2 Title text',
      expanded: false,
      type: 'empty'
    },
    {
      id: '2.3',
      title: '2.3 Seed Quality Requirements',
      expanded: true,
      type: 'radio',
      description: 'Please select one of the options (if applicable).',
      selectedValue: '',
      options: [
        {
          value: 'seed-only',
          label: 'Test Guidelines which only apply to seed-propagated varieties'
        },
        {
          value: 'all-varieties',
          label:
            'Test Guidelines which apply to seed-propagated varieties as well as other types of varieties'
        }
      ],
      previewText: 'There is currently no information to fill in.'
    }
  ];

  onRadioChange(panel: PanelConfig, value: string): void {
    panel.selectedValue = value;

    panel.previewText =
      value === 'seed-only'
        ? 'Seed-propagated varieties only selected.'
        : value === 'all-varieties'
        ? 'All varieties selected.'
        : 'There is currently no information to fill in.';
  }

  // =================================================
  // SECTION 3 : Method of Examination (3.1)
  // =================================================
  methodOfExamination = {
    title: '3. Method of Examination',
    sections: [
      {
        id: '3.1',
        title: 'Number of Growing Cycles',
        expanded: true,
        relatedLink: {
          text: 'Explanation of the growing cycle (GN 8)',
          url: '#'
        },
        items: [
          {
            id: '3.1.1',
            title: 'Title text',
            type: 'cycle',
            options: [
              { value: 'single', label: 'Single growing cycle' },
              { value: 'two', label: 'Two independent growing cycles' }
            ],
            subOptions: [
              {
                value: 'separate',
                label:
                  'Two independent cycles in the form of two separate plantings'
              },
              {
                value: 'single-planting',
                label:
                  'Two independent cycles from a single planting'
              }

            ]

          },
          {
            id: '3.1.2',
            title: 'Standard items are configured by default',
            type: 'text'
          },
          {
            id: '3.1.3',
            title: 'Title text',
            type: 'fruit',
            question: 'Is a satisfactory crop of fruit required?',
            fruitTypes: [
              {
                value: 'asw3a',
                label:
                  'Fruit species with clearly defined dormant period',
                code: 'ASW3(a)'
              },
              {
                value: 'asw3b',
                label:
                  'Fruit species with no clearly defined dormant period',
                code: 'ASW3(b)'
              },
              {
                value: 'asw3c',
                label:
                  'Evergreen species with indeterminate growth',
                code: 'ASW3(c)'
              }
            ]
          }
        ]
      }
    ]
  };

  // =================================================
  // SECTION 3.1.4 : PREVIEW
  // =================================================
  previewSection = {
    heading: '3.1.4 Standard items are configured by default',
    paragraphs: [
      '3.1.1 The minimum duration of tests should normally be two independent growing cycles.',
      '3.1.2 The two independent growing cycles may be observed from a single planting, examined in two separate growing cycles.',
      '3.1.4 The testing of a …'
    ],
    inlineInputText: 'trees'
  };

  // =================================================
  // SECTION 3.2 – 3.5
  // =================================================
  simplePanels = [
    { title: '3.2 Testing Place' },
    { title: '3.3 Conditions for Conducting the Examination' },
    { title: '3.4 Test Design' },
    { title: '3.5 Additional Tests' }
  ];

  // =================================================
  // FORM STATE
  // =================================================
  form = {
    growingCycle: '',
    cycleType: '',
    satisfactoryCrop: '',
    fruitType: ''
  };


}

/* =================================================
   Interfaces
   ================================================= */

interface Chapter {
  id: string;
  label: string;
  active: boolean;
}

interface PanelConfig {
  id: string;
  title: string;
  expanded: boolean;
  type: 'empty' | 'radio';
  description?: string;
  selectedValue?: string;
  options?: RadioOption[];
  previewText?: string;
}

interface RadioOption {
  value: string;
  label: string;
}
