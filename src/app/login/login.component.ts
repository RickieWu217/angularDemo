import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login$: Observable<boolean>;
  username = "";
  userpwd = "";

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.login$ = Observable.create(function(observer){

      observer.next(true);
      observer.complete();
    });
  }

  login(){
    this.router.navigate(['app'], {
      queryParams: {
        name: 'Leo'
      }
    });

  }

  logout(){


  }

}
