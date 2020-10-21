import { AddOrderComponent } from './../add-order/add-order.component';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { order } from '../order.model';
import * as fromStore from '../store/app.reducer';
import * as orderActions from './store/order.actions';

@Component({
  selector: 'app-fetch-orders',
  templateUrl: './fetch-orders.component.html',
  styleUrls: ['./fetch-orders.component.css']
})
export class FetchOrdersComponent implements OnInit {
  
  // public orders: order[];
  orders: Observable<order[]>;
  isError: boolean = false;
  showError:string = null;

  columnDefs = [
    { field: 'id', sortable: true, filter: true },
    { field: 'customerName', sortable: true, filter: true },
    { field: 'locationName', sortable: true, filter: true},
    { field: 'deliveryStatus', sortable: true, filter: true},
  ];


  constructor(private router: Router,private store: Store<fromStore.AppState>, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    
  }

  ngOnInit() {
    // this.http.get<order[]>(this.baseUrl + 'orders').subscribe(result => {
    //   this.orders = result;
    // }, error => console.error(error));
    this.store.dispatch(new orderActions.GetOrdersStart());
    this.orders = this.store.select(fromStore.getAllOrders);
    console.log(this.orders);
    this.store.select(fromStore.getAllAppError).subscribe(appError => {
      if(appError){
        this.isError = true;
        this.showError = appError;
      }
    });
  }

  deleteOrder(index){
    this.store.dispatch(new orderActions.DeleteOrderStart(index))
  }

  updateOrder(ID){
   this.router.navigate(['/update-order',ID])
  }

  addOrder(){
    this.router.navigate(['/add-order'])
  }

}


  


