import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderPrintComponent, ResponsiveLayoutComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { RxjsLayoutPageRoutingModule } from './rxjs-layout-page-routing.module';
import { RxjsLayoutPageComponent } from './rxjs-layout-page.component';
import { RxjsLayoutPageResolver } from './rxjs-layout-page.resolver';

@NgModule({
  imports: [CommonModule, RxjsLayoutPageRoutingModule, HeaderPrintComponent, ResponsiveLayoutComponent],
  declarations: [RxjsLayoutPageComponent],
  providers: [RxjsLayoutPageResolver],
})
export class RxjsLayoutPageModule {}
