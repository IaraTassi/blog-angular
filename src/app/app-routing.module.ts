import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { DataFakeComponent } from './data/data-fake/data-fake.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content',

    component:ContentComponent
  },
  {
    path:'content/id',

    component:DataFakeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
