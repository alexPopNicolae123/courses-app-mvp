import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {Route, RouterModule} from "@angular/router";
import {ApiCallsService} from "@courses-app/shared/api";
import {HttpClientModule} from "@angular/common/http";

const homeRoutes: Route[] = [
  {path: '', component: HomepageComponent}
]

@NgModule({
  declarations: [HomepageComponent],
  providers: [ApiCallsService],
  imports: [CommonModule,HttpClientModule, RouterModule.forChild(homeRoutes)],
})
export class HomepageModule {}
