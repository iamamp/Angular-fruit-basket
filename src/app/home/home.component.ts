import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  apples: number = 10;
  oranges: number = 10;
  grapes: number = 10;
  basket: string[] = [];
  top: string = undefined;
  disabled: boolean;

  constructor(public dataService: DataService) {
    //console.log("logged in as ",this.message)
    if (this.message === 'Admin') this.disabled = false;
    else this.disabled = true;
   }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message)
    console.log("logged in as ",this.message)
    if (this.message === 'Admin') this.disabled = false;
    else this.disabled = true;
    console.log("disabled flag is ", this.disabled)
  }
  
  incrApple() { //adding to basket
    if(this.apples === 0 ) {
      alert("not permitted!")
    } else {
      this.basket.push("a")
      this.top = "a"
      this.apples--
      console.log(this.basket)
    }
  }

  decrApple() { //putting back to reserve
    if(this.apples === 10 || this.top !== "a" ) {
      alert("not permitted!")
    } else {
      this.apples++;
      this.basket = this.basket.slice(0,this.basket.length-1)
      this.top = this.basket[this.basket.length-1]
      console.log('basket is', this.basket)
      console.log('top is', this.top)
    }
  }

  incrOrange() { //adding to basket
    if(this.oranges === 0) {
      alert("not permitted!")
    } else {
      this.basket.push("o")
      this.top = "o"
      this.oranges--
    }
  }

  decrOrange() { //putting back to reserve
    if(this.oranges === 10 || this.top !== "o" ) {
      alert("not permitted!")
    } else {
      this.oranges++;
      this.basket = this.basket.slice(0,this.basket.length-1)
      this.top = this.basket[this.basket.length-1]
      console.log('basket is', this.basket)
      console.log('top is', this.top)
    }
  }

  incrGrape() { ////adding to basket
    if(this.grapes === 0) {
      alert("not permitted!")
    } else {
      this.basket.push("g")
      this.top = "g"
      this.grapes--
    }
  }

  decrGrape() { //putting back to reserve
    if(this.grapes === 10 || this.top !== "g") {
      alert("not permitted!")
    } else {
      this.grapes++;
      this.basket = this.basket.slice(0,this.basket.length-1)
      this.top = this.basket[this.basket.length-1]
      console.log('basket is', this.basket)
      console.log('top is', this.top)
    }
  }
}
