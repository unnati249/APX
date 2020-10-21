import { order } from './../../order.model';
import { Action } from '@ngrx/store';

export const ADD_ORDER_START = 'ADD_ORDER_START';
export const ADD_ORDER = 'ADD_ORDER';
export const ADD_ORDER_FAIL = 'ADD_ORDER_FAIL';

export const GET_ORDERS_START = 'GET_ORDERS_START';
export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';

export const UPDATE_ORDER_START = 'UPDATE_ORDER_START';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const UPDATE_ORDER_FAIL = 'UPDATE_ORDER_FAIL' ;

export const DELETE_ORDER_START = 'DELETE_ORDER_START';
export const DELETE_ORDER = 'DELETE_ORDER';
export const DELETE_ORDER_FAIL = 'DELETE_ORDER_FAIL';


export class AddOrderStart implements Action {
    readonly type = ADD_ORDER_START; 
    constructor(public payload: order){}
}

export class AddOrder implements Action {
    readonly type = ADD_ORDER; 
    constructor(public payload: order){}
}

export class AddOrderFail implements Action {
    readonly type = ADD_ORDER_FAIL; 
    constructor(public payload: string){}
}

export class GetOrdersStart implements Action {
    readonly type = GET_ORDERS_START; 
    constructor(){}
}

export class GetOrders implements Action {
    readonly type = GET_ORDERS; 
    constructor(public payload: order[]){}
}

export class GetOrdersFail implements Action {
    readonly type = GET_ORDERS_FAIL; 
    constructor(public payload: string){}
}

export class UpdateOrderStart implements Action {
    readonly type = UPDATE_ORDER_START; 
    constructor(public payload: {id:string,order: order}){}
}

export class UpdateOrder implements Action {
    readonly type = UPDATE_ORDER; 
    constructor(public payload: {id:string,order: order}){}
}

export class UpdateOrderFail implements Action {
    readonly type = UPDATE_ORDER_FAIL; 
    constructor(public payload: string){}
}

export class DeleteOrderStart implements Action {
    readonly type = DELETE_ORDER_START; 
    constructor(public payload: string){}
}
export class DeleteOrder implements Action {
    readonly type = DELETE_ORDER; 
    constructor(public payload: string){}
}

export class DeleteOrderFail implements Action {
    readonly type = DELETE_ORDER_FAIL; 
    constructor(public payload: string){}
}



export type orderActions = AddOrderStart | 
AddOrder | 
AddOrderFail | 
GetOrdersStart | 
GetOrders |
GetOrdersFail |
UpdateOrderStart |  
UpdateOrder | 
UpdateOrderFail | 
DeleteOrderStart | 
DeleteOrder |
DeleteOrderFail;
                            