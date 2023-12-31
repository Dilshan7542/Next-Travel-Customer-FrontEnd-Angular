import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChildFn,
  CanActivateFn, Router,
  RouterStateSnapshot, UrlTree
} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {VehicleService} from "../../../service/vehicle.service";
import {HotelService} from "../../../service/hotel.service";
import {SearchService} from "../../../service/search.service";


@Injectable({providedIn:"root"})
export class BookingGuard implements CanActivate{

  constructor(private vehicleService:VehicleService,private hotelService:HotelService,private searchService:SearchService,private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.vehicleService.selectVehicleValue) {

    }
          if(sessionStorage.getItem("selectVehicle")){
             if(sessionStorage.getItem("selectHotel")){
               if(this.searchService.searchSubject){
                 return true;
               }
             }else{
          console.error("Please Select Hotel");
             }
          }else{
          }
        this.router.navigate(['/home']);
    return false;
  }

}

