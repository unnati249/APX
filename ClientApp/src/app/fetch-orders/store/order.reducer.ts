import { order } from '../../order.model';
import * as orderActions from './order.actions';

export interface OrderState{
    orders : order[],
    appError : string
}
   
const initialState : OrderState = {
    orders : [],
    appError : null
};
export function orderReducer(state : OrderState = initialState, action: orderActions.orderActions){
    switch(action.type){
        case orderActions.ADD_ORDER:
            return {
                orders: [...state.orders, action.payload],
                appError : null
            };
        case orderActions.ADD_ORDER_START:
            return {
                orders: [...state.orders],
                appError : null
            };
        case orderActions.ADD_ORDER_FAIL: 
            return {
                orders: [...state.orders],
                appError : action.payload              
            };
        
            case orderActions.GET_ORDERS_START:
                return {
                    orders: [...state.orders],
                    appError : null  
                };

            case orderActions.GET_ORDERS:
                {
                return {
                orders: [...action.payload],
                appError : null                    
                   
                };
            }
            case orderActions.GET_ORDERS_FAIL: 
            return {
                orders: [...state.orders],
                appError : action.payload               
            };
            case orderActions.UPDATE_ORDER_START: 
                return {
                    orders : [...state.orders],
                    appError : null
                };

            case orderActions.UPDATE_ORDER:
                console.log(action.payload)
                console.log(state.orders)
                const updatedCourses = [...state.orders];
                let objIndex = updatedCourses.findIndex((obj => obj.id == action.payload.id));
                console.log(objIndex)
                updatedCourses[objIndex] = action.payload.order
                console.log(updatedCourses)
                return {
                    orders: [...updatedCourses],
                    appError : null
                };

            case orderActions.UPDATE_ORDER_FAIL:
                return {
                    orders: [...state.orders],
                    appError : action.payload
                }
            
             case orderActions.DELETE_ORDER_START:
                return {
                    orders: [...state.orders],
                    appError : null
                };    

            case orderActions.DELETE_ORDER:
                // const coursesRemaining = [...state.orders];
                // return {
                //     orders: coursesRemaining.filter((cs,csIndex) => {
                //         return !(cs.id.localeCompare(action.payload));
                //     }),
                //     appError : null
                // };

                const coursesRemaining = [...state.orders];
                let objIndexDel = coursesRemaining.findIndex((obj => obj.id == action.payload));
                coursesRemaining.splice(objIndexDel,1)

                return {
                    orders: [...coursesRemaining],
                    appError : null
                }

                case orderActions.DELETE_ORDER_FAIL: 
                return {
                    orders: [...state.orders],
                    appError : action.payload               
                };
         
        default: 
            return state;
    }
}

export const selectOrders = (state: OrderState) => state.orders;
export const selectAppError = (state: OrderState) => state.appError;

 