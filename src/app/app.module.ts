import { NgModule } from '@angular/core';
//store
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule} from '@ngrx/store-devtools'


import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),//ad reducer if needed
    StoreDevtoolsModule.instrument(),
    UsersModule,
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
