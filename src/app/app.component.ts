import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project1';
  productForm=new FormGroup({
    productid:new FormControl(),
    productname:new FormControl(),
    productbrand:new FormControl(),
    productrating:new FormControl()
  });
}
