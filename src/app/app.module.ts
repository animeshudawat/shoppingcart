import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCatalogComponent } from '../app/pages/product-catalog/product-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './services/product/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
