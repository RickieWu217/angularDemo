import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account/account.component';
import { OrganizationComponent } from './organization/organization/organization.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { OrganizationListComponent } from './organization/organization-list/organization-list.component';



@NgModule({
  declarations: [AccountComponent, OrganizationComponent, AccountListComponent, OrganizationListComponent],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class PagesModule { }
