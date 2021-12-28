import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ShareService} from "../share/share.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  user:any=0;
  msg:string='';
  constructor(private router: Router,private shared:ShareService) { }

  ngOnInit(): void {
    this.user=this.shared.getid();
    console.log(this.user.type);
  }
  view(){
    
    this.router.navigateByUrl("/view");
  }
  create(){
    if(this.user.type==="super" || this.user.type==="admin")
    {
      this.router.navigateByUrl("/create");
    }
    else{
      this.msg="normal user cannot create invoice";
    }
    
  }
  update(){
    if(this.user.type==="super" )
    {
      this.router.navigateByUrl("/update");
    }
    else{
      this.msg="super user can only update invoice";
    }
  }
  logout()
  {
    this.router.navigateByUrl("/login");
  }
}
