import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { sharedFooterRoutes } from './lib.routes';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedFooterRoutes),
    RouterModule,
  ],
  declarations: [FooterComponent],
})
export class SharedFooterModule {}
