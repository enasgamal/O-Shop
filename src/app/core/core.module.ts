import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([]),
    NgbModule
  ],
  exports: [NavbarComponent],

})
export class CoreModule { }
