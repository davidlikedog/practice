import {NgModule} from '@angular/core';

import {PagesRoutingModule} from './pages-routing.module';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {LayoutModule} from '../layout/layout.module';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PagesComponent} from './pages.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule
  ],
  declarations: [
    HomeComponent,
    NotFoundComponent,
    PagesComponent,
  ],
})
export class PagesModule {
}
