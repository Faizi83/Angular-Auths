import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './shared/home/home.component'
import {AboutComponent} from './shared/about/about.component'
import {ContactComponent} from './shared/contact/contact.component'
import { ProductComponent } from './shared/products/products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products', component:ProductComponent},
  {path: 'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
