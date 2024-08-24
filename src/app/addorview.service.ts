import {Injectable} from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class AddorviewService{
    constructor(private http:HttpClient){}
    url_add:string="";
    getProducts(details:any)
    {
        this.url_add='http://localhost:5000/product/addProduct?name='+details.productname+'&id='+details.productid+'&brand='+details.productbrand+'&rating='+details.productrating;
        return this.http.get(this.url_add);
    }
    getProducts1() {
        return this.http.get<any[]>('http://localhost:5000/product/getProducts');
      }
}
//http://localhost:5000/product/addProduct?name=xyz&id=2&brand=oppo&rating=5