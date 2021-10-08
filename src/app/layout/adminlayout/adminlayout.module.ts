import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminlayoutRoutingModule } from './adminlayout-routing.module';
import { RouterModule } from '@angular/router';
import { StartComponent } from 'src/app/views/start/start.component';
import { NofoundComponent } from 'src/app/views/nofound/nofound.component';
import { AngularmaterialModule } from 'src/app/util/angularmaterial/angularmaterial.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from 'src/app/views/macros/carrousel/carrousel.component';
import { ClientbaberoComponent } from 'src/app/views/home/clientbabero/clientbabero.component';
import { ClientbatacirComponent } from 'src/app/views/home/clientbatacir/clientbatacir.component';
import { ClientbatapacComponent } from 'src/app/views/home/clientbatapac/clientbatapac.component';
import { ClienternoenfComponent } from 'src/app/views/home/clienternoenf/clienternoenf.component';
import { ClientgorroComponent } from 'src/app/views/home/clientgorro/clientgorro.component';
import { ClientmaskblackComponent } from 'src/app/views/home/clientmaskblack/clientmaskblack.component';
import { ClientmaskblueComponent } from 'src/app/views/home/clientmaskblue/clientmaskblue.component';


@NgModule({
  declarations: [
    StartComponent,
    NofoundComponent,
    CarrouselComponent,
    ClientbatacirComponent,
    ClientbatapacComponent,
    ClientbaberoComponent,
    ClientgorroComponent,
    ClientmaskblackComponent,
    ClientmaskblueComponent,
    ClienternoenfComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminlayoutRoutingModule),
    AngularmaterialModule,
    FormsModule,
    NgbModule
  ]
})
export class AdminlayoutModule { }
