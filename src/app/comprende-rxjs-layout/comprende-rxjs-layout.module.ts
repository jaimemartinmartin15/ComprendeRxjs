import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderPrintComponent, ResponsiveLayoutComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { RxjsLayoutPageRoutingModule } from './comprende-rxjs-layout-routing.module';
import { RxjsLayoutPageComponent } from './comprende-rxjs-layout.component';
import { RxjsLayoutPageResolver } from './comprende-rxjs-layout.resolver';

@NgModule({
  imports: [CommonModule, RxjsLayoutPageRoutingModule, HeaderPrintComponent, ResponsiveLayoutComponent],
  declarations: [RxjsLayoutPageComponent],
  providers: [RxjsLayoutPageResolver],
})
export class RxjsLayoutPageModule {}
