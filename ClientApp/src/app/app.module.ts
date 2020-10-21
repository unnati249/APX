import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchOrdersComponent } from './fetch-orders/fetch-orders.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.reducer';
import { OrdersEffects } from './fetch-orders/store/order.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { AgGridModule } from 'ag-grid-angular';
import { MasterControlComponent } from './master-control/master-control.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchOrdersComponent,
    MasterControlComponent,
    AddOrderComponent,
    UpdateOrderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-orders', component: FetchOrdersComponent },
      { path: 'add-order', component: AddOrderComponent },
      { path: 'update-order/:orderId', component: UpdateOrderComponent },



    ]),
    AgGridModule.withComponents([]),
    // StoreModule.forRoot({}, {}),
    // EffectsModule.forRoot([])
    StoreModule.forRoot(reducers),
    StoreModule.forFeature('orders',reducers),
    // StoreDevtoolsModule.instrument({logOnly:environment.production}),
    EffectsModule.forRoot([OrdersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
