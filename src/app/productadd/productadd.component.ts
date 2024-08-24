import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';
import { AddorviewService } from '../addorview.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent {
  productForm=new FormGroup({
    productid:new FormControl(),
    productname:new FormControl(),
    productbrand:new FormControl(),
    productrating:new FormControl()
  });
  result:any;
  Products()
  {
    console.log(this.productForm.value);
    this.ser.getProducts(this.productForm.value).subscribe((response)=>this.result=response);
    alert("Product added");
    this.route.navigate(['']);
  }
  constructor(private ser:AddorviewService,private route:Router){}

}