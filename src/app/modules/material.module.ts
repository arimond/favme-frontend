import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule
  ]
})

export class MaterialModule { }
