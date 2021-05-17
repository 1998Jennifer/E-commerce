import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Product } from './../../../product.model'
import { environment } from './../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient, ) { }

  getAllProducts(){
    return this.http.get<Product[]>(environment.url_api);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api}${id}`)

  }

  createProduct(product : Product){
    // Un POST tiene un path y un body que se le envia como tal a la petición
    // Cada que llames a este metodo se crea un producto
    return this.http.post(`${environment.url_api}`, product)
  }

  updateProduct(id: string, changes: Partial<Product>){
    // Para hacer la actualizacion de un producto necesitas saber su id
    return this.http.put(`${environment.url_api}${id}`, {changes})
  }
  deleteProducto(id: string){
    return this.http.delete(`${environment.url_api}${id}`)

  }
}
