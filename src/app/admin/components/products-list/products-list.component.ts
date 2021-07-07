import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();

  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProducto(id).subscribe(rta => {
      // reto
      console.log("Producto borrado...");
      if(rta){
        // Esto quitará el item de la vista para evitar hacer recarga
        console.log(rta);
        const index =  this.products.findIndex(product =>{
          product.id === id
        });
        this.products.splice(index, 1);
        this.products = [...this.products]
        
      }
      
    });

  }

}
