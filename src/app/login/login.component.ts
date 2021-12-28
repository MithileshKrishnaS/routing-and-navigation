import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {ShareService} from "../share/share.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any=[];
  constructor(private router: Router,private http : HttpClient,
    private shared:ShareService) { }
  name:any;
  pass:any;
  id:number=0;
  no=false;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/Users').subscribe(users=> {
      this.users=users;
    })
  }
  home(){
    for(let i=0;i<this.users.length;i++)
    {
      if(this.users[i].username==this.name && this.users[i].password==this.pass)
      {
        this.id=i;
        this.shared.setid(this.users[this.id]);
        //console.log(this.users[this.id]);
        this.router.navigateByUrl("/home");
      }
      else{
        this.no=true;
      }
    }
  }
}
