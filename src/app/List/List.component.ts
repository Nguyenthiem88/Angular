import {Component} from "@angular/core";
import {ProductData} from "../../data/ProductData";

@Component({
  selector: "list-products",
  templateUrl:"./List.component.html"
})

export class ListComponent{
  products:ProductData[] =[
    {
      name:"san pham 1",
      image:"demo.png",
      price:1000
    },
    {
      name:"san pham 2",
      image:"demo.png",
      price:3000
    }
  ];
}
