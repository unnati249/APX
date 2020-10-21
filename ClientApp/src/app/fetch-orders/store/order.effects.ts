import { OrderService } from './../../services/order.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as orderActions from './order.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersEffects{
    @Effect()
    OrderAdd = this.action$.pipe(
        ofType(orderActions.ADD_ORDER_START),
        switchMap((courseData:orderActions.AddOrderStart) => {
            return this.orderService.addOrder(courseData.payload)
            .pipe(
                map(response => {
                    return new orderActions.AddOrder(response);
                }),
                catchError(error => {
                    return of(new orderActions.AddOrderFail(error));
                })
            
            );
        }),

    );

    @Effect()
    OrderUpdate = this.action$.pipe(
        ofType(orderActions.UPDATE_ORDER_START),
        switchMap((orderData:orderActions.UpdateOrderStart) => {
            return this.orderService.updateOrder(orderData.payload.id,orderData.payload.order)
            .pipe(
                map(response => {
                    return new orderActions.UpdateOrder(orderData.payload);
                 }),
                catchError(error => {
                    return of(new orderActions.UpdateOrderFail(error));
                })
            
            );
        }),

    );

    @Effect() 
    OrderFetch = this.action$.pipe(
    ofType(orderActions.GET_ORDERS_START),
    switchMap(() => {
        return this.orderService.getOrders()
        .pipe(
        map(response => {return new orderActions.GetOrders(response)}),
        catchError(error => {
            return of(new orderActions.GetOrdersFail(error));
        })
        );
    }));

    @Effect() 
    OrderDelete = this.action$.pipe(
    ofType(orderActions.DELETE_ORDER_START),
    switchMap((orderData:orderActions.DeleteOrderStart) => {
        return this.orderService.deleteOrder(orderData.payload)
        .pipe(
        map(response => {return new orderActions.DeleteOrder(orderData.payload)}),
        catchError(error => {
            return of(new orderActions.DeleteOrderFail(error));
        })
        );
    }));
    
    @Effect({dispatch:false})
    orderAddSuccess = this.action$.pipe(
        ofType(orderActions.ADD_ORDER),
        tap(() => {
            this.router.navigate(['/fetch-orders']);
        })
    )

    @Effect({dispatch:false})
    OrderDeleteSuccess = this.action$.pipe(
        ofType(orderActions.DELETE_ORDER),
        tap(() => {
            this.router.navigate(['/fetch-orders']);
        })
    )

    @Effect({dispatch:false})
    orderUpdateSuccess = this.action$.pipe(
        ofType(orderActions.UPDATE_ORDER),
        tap(() => {
            this.router.navigate(['/fetch-orders']);
        })

    )

    constructor(private action$: Actions, private http: HttpClient, private router:Router, private orderService : OrderService){}
}