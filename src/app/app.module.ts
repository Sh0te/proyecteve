import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './shared/nav/nav.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { LogFormComponent } from './shared/log-form/log-form.component';
import { SignFormComponent } from './shared/sign-form/sign-form.component';
import { EvebodyComponent } from './component/evebody/evebody.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogInComponent,
    LogFormComponent,
    SignFormComponent,
    EvebodyComponent,
    AboutUsComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NgModule, NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
