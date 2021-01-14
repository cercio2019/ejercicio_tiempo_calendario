import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicacionComponent } from './component/aplicacion/aplicacion.component';
import { CalendarioComponent } from './component/calendario/calendario.component';


const routes: Routes = [

  {path : '', component : AplicacionComponent },
  {path : 'calendar', component : CalendarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
