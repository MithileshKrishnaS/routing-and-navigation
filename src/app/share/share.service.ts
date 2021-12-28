import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  id:any;
  constructor() { }
  setid(data:any)
  {
    this.id=data;
  }
  getid()
  {
    return this.id;
  }
  login(){
    if(this.id!==undefined)
    {
      console.log(this.id.type)
      return true;
    }
    else
    {
      return false;
    }
  }
}
