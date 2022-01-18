import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
//import { NgxPaginationModule } from 'ngx-pagination';
import { HttpHeaders } from '@angular/common/http';

import { ProductModule } from './ProductModule';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  formValue! : FormGroup;
  productObj : ProductModule = new ProductModule();
  productData!: any;
  selectedFile!: File;
  public productList : any;
  page! : number;
  totalRecords!: number;
  
  constructor(private fb: FormBuilder,private apiService :ApiService) { }

  ngOnInit(): void {
    this.formValue= this.fb.group({
      id: 0,  
    productname : [''],
    price : [''],
    quantity: [''],
    productcode: [''],
    image : [''],
    })
    this.getAllProduct();
  }

  getAllProduct() {
    this.apiService.getProducts().
    subscribe(res=>{
      this.productData = res;
      this.totalRecords =this.productData.length;
    })
   }
   onselectedFile(event) {
    this.selectedFile = <File>event.target.files[0];
     }

  postProductDetails(data) {
   const fileData = new FormData();
   
   fileData.append('image', this.selectedFile);
   fileData.append('price', data.price); 
   fileData.append('quantity', data.quantity); 
   fileData.append('productname', data.productname);
   this.apiService.postProduct(fileData)
   .subscribe(res=>{
     console.log(res);

       alert("Product added successfully");
       this.getAllProduct(); 
       this.formValue.reset();
    })
  }

}

