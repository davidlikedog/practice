import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';

import {MatSidenavModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule
  ],
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
    MatSidenavModule,
    MatButtonModule
  ],
})
export class LayoutModule {
}
