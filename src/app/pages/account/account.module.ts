import { AccountListComponent } from './account-list/account-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [AccountComponent,AccountListComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
