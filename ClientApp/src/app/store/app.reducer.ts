import * as fromOrders from '../fetch-orders/store/order.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    order: fromOrders.OrderState;
  }

export const reducers: ActionReducerMap<AppState> = {
  order : fromOrders.orderReducer
}

export const getAppState = createFeatureSelector<AppState>('orders');

export const getOrderState = createSelector(getAppState,(state: AppState)=> state.order);

export const getAllOrders = createSelector(getOrderState, fromOrders.selectOrders)
export const getAllAppError = createSelector(getOrderState, fromOrders.selectAppError)