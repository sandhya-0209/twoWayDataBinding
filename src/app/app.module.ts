import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { singlePageComponent } from './shared/components/singlePage/singlePage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    singlePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
