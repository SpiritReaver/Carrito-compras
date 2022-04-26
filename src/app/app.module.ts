
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filtro.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarritoComponent,
    ProductoComponent,
    FilterPipe,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }