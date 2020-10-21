import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { order } from '../order.model';
import * as fromStore from '../store/app.reducer';
import * as orderActions from '../fetch-orders/store/order.actions';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit() {
  }

  onSubmit(val){
    console.log(val);
    this.store.dispatch(new orderActions.AddOrderStart(val));

  }

}
