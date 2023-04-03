import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { InfoRecetaComponent } from './views/info-receta/info-receta.component';
import { EstadisticasAdminComponent } from './views/estadisticas-admin/estadisticas-admin.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    AboutUsComponent,
    InfoRecetaComponent,
    EstadisticasAdminComponent,
    PerfilComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    NgbModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
