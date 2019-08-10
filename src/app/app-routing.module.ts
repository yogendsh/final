import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DemandManagerComponent } from './demand-manager/demand-manager.component';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';


const routes: Routes = [{path:'',component:LoginComponent,pathMatch:'full'},
{
  path: 'demand',
  component: DemandManagerComponent
},{
  path: 'table',
  component: TableComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
