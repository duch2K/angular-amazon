import { Product } from './../../models/products.model';
import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../../services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Product[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getJson().subscribe(resp => {
      this.items = resp
    })
  }
}
