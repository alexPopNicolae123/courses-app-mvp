import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedHeaderRoutes } from './lib.routes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedHeaderRoutes),
  ],
  declarations: [HeaderComponent],
})
export class SharedHeaderModule {}
