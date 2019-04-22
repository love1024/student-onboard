import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './angularmaterial.module';

/**
 * Core Module
 * Contains shared components, models, services etc
 * @export
 * @class CoreModule
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    AngularMaterialModule
  ]
})
export class CoreModule { }
