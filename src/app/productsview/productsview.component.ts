import { Component, OnInit } from '@angular/core';
import { AddorviewService } from '../addorview.service';

@Component({
  selector: 'app-productsview',
  standalone: true,
  imports: [],
  templateUrl: './productsview.component.html',
  styleUrl: './productsview.component.css'
})
export class ProductsviewComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: AddorviewService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts1().subscribe(
      (data: any[]) => {
        this.products = data;
      },
    
    );

}
}
