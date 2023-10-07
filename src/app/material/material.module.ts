import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';

import {MatBadgeModule} from '@angular/material/badge';

import {MatMenuModule} from '@angular/material/menu';

import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    RouterLink
  ],
  exports:[
    CommonModule,

    BrowserModule,

    FormsModule,

    BrowserAnimationsModule,

    MatFormFieldModule,

    MatButtonModule,

    MatCardModule,

    MatInputModule,

    MatIconModule,

    MatBadgeModule,

    MatMenuModule,
    
    RouterLink

  ]
})
export class MaterialModule { 
  
}
