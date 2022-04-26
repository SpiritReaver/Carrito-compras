
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Servicio/carrito.service';
import { AuthService } from 'src/app/Servicio/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  public totalItem : number = 0;
  public searchTerm !: string;
  userLogged = this.authService.getUserLogged();
  constructor(private cartService : CartService,private authService: AuthService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  logOut(){
    this.authService.logout();
  }
}