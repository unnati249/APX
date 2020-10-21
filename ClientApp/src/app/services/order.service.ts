import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, ObjectUnsubscribedError } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { order } from '../order.model';

import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  updateSingleOrder = new BehaviorSubject<order>(null); 

  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string) { 

  }
    
  getOneOrder(id){
    this.http.get<order>(this.baseUrl + 'orders/' + id)
    .subscribe((data) => {
       this.updateSingleOrder.next(data);
    }, error => console.log("error"))
    }

    getOrders(){
      return this.http.get<order[]>(this.baseUrl + "orders")
      }

  addOrder(order){
   return this.http.post<order>(this.baseUrl + "orders/create", order)
  }

  updateOrder(id,body){
   return this.http.post(this.baseUrl + "orders/update/" + id, body)
  }

  deleteOrder(id){
    return this.http.delete(this.baseUrl + 'orders/delete/' + id)
  }

  // handleError(error: AppError){
  //   if(error instanceof BadInputError){
  //     return throwError(new BadInputError(error));
  //   }
  //   else if(error instanceof NotFoundError){
  //     return throwError(new NotFoundError(error));
    
  //   }else{
  //     return throwError(new AppError(error));  
  // }
  // }
}
