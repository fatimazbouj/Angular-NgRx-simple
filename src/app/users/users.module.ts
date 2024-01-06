import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//store
import { StoreModule } from '@ngrx/store'
import { UsersListComponent } from './users-list/users-list.component';
import { TableModule } from 'primeng/table';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { usersReducer } from './store/users.reducers';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('user',usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    TableModule,
  ],
  exports:[
    UsersListComponent,
  ]
})
export class UsersModule { }
