import { order } from './../order.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromStore from '../store/app.reducer'
import { OrderService } from '../services/order.service';
import * as orderActions from '../fetch-orders/store/order.actions';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  orderID;
  private SubscribeToOrder : Subscription;
  currentOrder: order;
  constructor(private activeRoute: ActivatedRoute, 
    private orderService: OrderService, 
    private router:Router, 
    private store: Store<fromStore.AppState>) { }

    // form = new FormGroup({
    //   _id: new FormControl(''),
    //   customerName: new FormControl(''),
    //   locationName:new FormControl(''),
    //   courseDuration: new FormControl(''),
    //   courseFee:new FormControl('',Validators.required),
    //   __v:new FormControl('')
     
    // })

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.orderID = params['orderId'];
    })

    this.orderService.getOneOrder(this.orderID);
    this.SubscribeToOrder = this.orderService.updateSingleOrder.subscribe((data)=>{
      this.currentOrder = data;
    });
  }

  onSubmit(val){
    console.log(val);
    this.store.dispatch(new orderActions.UpdateOrderStart({id: this.orderID, order: val}));

  }

}
