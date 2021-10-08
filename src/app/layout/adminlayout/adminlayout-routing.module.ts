import { Routes } from '@angular/router';
import { ClientbaberoComponent } from 'src/app/views/home/clientbabero/clientbabero.component';
import { ClientbatacirComponent } from 'src/app/views/home/clientbatacir/clientbatacir.component';
import { ClientbatapacComponent } from 'src/app/views/home/clientbatapac/clientbatapac.component';
import { ClienternoenfComponent } from 'src/app/views/home/clienternoenf/clienternoenf.component';
import { ClientgorroComponent } from 'src/app/views/home/clientgorro/clientgorro.component';
import { ClientmaskblackComponent } from 'src/app/views/home/clientmaskblack/clientmaskblack.component';
import { ClientmaskblueComponent } from 'src/app/views/home/clientmaskblue/clientmaskblue.component';
import { NofoundComponent } from 'src/app/views/nofound/nofound.component';
import { StartComponent } from 'src/app/views/start/start.component';

export const AdminlayoutRoutingModule: Routes = [
  {path: '' , component: StartComponent},
  {path: 'nofound' , component: NofoundComponent},
  {path: 'cbc' , component: ClientbatacirComponent},
  {path: 'cbp' , component: ClientbatapacComponent},
  {path: 'cb' , component: ClientbaberoComponent},
  {path: 'cg' , component: ClientgorroComponent},
  {path: 'cmba' , component: ClientmaskblueComponent},
  {path: 'cmb' , component: ClientmaskblackComponent},
  {path: 'cte' , component: ClienternoenfComponent}
  
];
