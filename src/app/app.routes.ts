import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProductaddComponent} from './productadd/productadd.component';
import { ProductsviewComponent } from './productsview/productsview.component';

export const routes: Routes = [
    { path: 'test', component: TestComponent }, // Added test route
    { path: 'addProduct', component: ProductaddComponent },
    { path: 'viewProducts', component: ProductsviewComponent },
];
