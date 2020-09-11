import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(newMsg: string) {
    //console.log(this.message);
    console.log('new string is ',newMsg);
    this.dataService.changeMessage(newMsg);
    //console.log(this.message);
  }

  //this will pass the username string to the service 'DataService'
  //which has a BehaviorSubject as an observable
  //the home component subscribes to this behaviorsubject and gets the next message
  //the next message is basically the username string
  //if it is Admin, you can add to basket stack 
  onSubmit(val) {
    console.log(val)
    console.log(val.username)
    if (val.username==='Admin' && val.password==='Admin'){
      this.newMessage('Admin');
      this.router.navigate(['/home']);
    } else if (val.username==='MyName' && val.password==='test'){
      this.newMessage('MyName');
      this.router.navigate(['/home']);
    }
  }
}