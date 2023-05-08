import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {Route, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

const homeRoutes: Route[] = [
  {path: '', component: HomepageComponent}
]

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), MatButtonModule],
})
export class HomepageModule {}
