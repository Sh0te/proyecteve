import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './component/log-in/log-in.component';
import { EvebodyComponent } from './component/evebody/evebody.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'evebody', component: EvebodyComponent },
  { path: 'aboutus', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
