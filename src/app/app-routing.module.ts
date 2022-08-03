import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MassifComponent} from "./massif/massif.component";
import {CreatMassifComponent} from "./creat-massif/creat-massif.component";

const routes: Routes = [
  {path:'',component:MassifComponent},
  {path:'create',component:CreatMassifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
