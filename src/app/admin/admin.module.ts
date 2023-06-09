import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DiscountsComponent } from './discounts/discounts.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { EditDiscountsComponent } from './discounts/edit-discounts/edit-discounts.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { LoginComponent } from './login/login.component';
import { NewCategoryComponent } from './categories/new-category/new-category.component';
import { NewDiscountComponent } from './discounts/new-discount/new-discount.component';
import { UsersComponent } from './users/users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersItemsComponent } from './orders-items/orders-items.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    SidebarComponent,
    AsidebarComponent,
    FooterComponent,
    EditProductComponent,
    CategoriesComponent,
    EditCategoryComponent,
    DiscountsComponent,
    InventoriesComponent,
    EditDiscountsComponent,
    NewProductComponent,
    LoginComponent,
    NewCategoryComponent,
    NewDiscountComponent,
    UsersComponent,
    OrdersComponent,
    OrdersItemsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule , Ng2SearchPipeModule],
})
export class AdminModule {}
