import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  searchProductName : string = "";
  onProsuctSearch(eve: Event){
      let val : string =(eve.target as HTMLInputElement).value;
      this.searchProductName = val;
  };

  searchStudentName : string = "";
  outOfStock : boolean = false;
}
