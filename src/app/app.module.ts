import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RelojComponent } from './component/reloj/reloj.component';
import { CronometroComponent } from './component/cronometro/cronometro.component';
import { CalendarioComponent } from './component/calendario/calendario.component';
import { CuentaRegresivaComponent } from './component/cuenta-regresiva/cuenta-regresiva.component';
import { AplicacionComponent } from './component/aplicacion/aplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RelojComponent,
    CronometroComponent,
    CalendarioComponent,
    CuentaRegresivaComponent,
    AplicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
