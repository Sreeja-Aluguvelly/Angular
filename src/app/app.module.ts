import {BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {ProductaddComponent} from './productadd/productadd.component';
import { ProductsviewComponent } from './productsview/productsview.component';
import { RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddorviewService} from './addorview.service';
import { routes } from './app.routes';
import { TestComponent } from './test/test.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations:[
        AppComponent,
        ProductaddComponent,
        ProductsviewComponent,
        TestComponent
    ],
    imports:[
        BrowserModule,FormsModule,ReactiveFormsModule,
        HttpClientModule,RouterModule.forRoot(routes)
    ],
    providers: [AddorviewService,provideHttpClient()],
    bootstrap:[AppComponent]
})
export class AppModule{}