import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ShareService } from 'src/app/share/share.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:ShareService,private router:Router)
  {

  }

  canActivate():any{
    if(this.service.login())
    {
      return true;
    }
    else
    {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
