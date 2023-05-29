import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [{ path: '', component: HomePageComponent }],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: ProductListComponent },
      { path: 'product/add', component: AddComponent },
      { path: 'product/edit/:id', component: EditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
