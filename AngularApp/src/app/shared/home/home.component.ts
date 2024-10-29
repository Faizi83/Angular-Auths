import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productForm!: FormGroup;

 
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      ProductName: ['', Validators.required],
      Price: ['', [Validators.required, Validators.min(0)]],
      Description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: (response) => {
          alert("Product Added Successfully");
          console.log('Product added:', response);
          this.productForm.reset();
        },
        error: (error) => {
          console.error('Error adding product:', error);
        },
        complete: () => {
          console.log('Product submission completed');
        }
      });
    }
  }
  }
