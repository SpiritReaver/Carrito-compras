import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Servicio/carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public IVA !: number ;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.IVA =this.cartService.getIva()
      this.grandTotal = this.cartService.getTotalPrice()+this.IVA;
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
