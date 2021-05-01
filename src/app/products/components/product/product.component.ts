import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product 
  @Output() productClicked: EventEmitter<any> = new EventEmitter()
  
  today = new Date() 

  addCart(){
    console.log('añadido al carrito')
    this.productClicked.emit(this.product.id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
