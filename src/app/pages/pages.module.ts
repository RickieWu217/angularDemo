import { OrganizationModule } from './organization/organization.module';
import { AccountModule } from './account/account.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization/organization/organization.component';
import { OrganizationListComponent } from './organization/organization-list/organization-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountModule,
    OrganizationModule
  ],
  exports:[]
})
export class PagesModule { }
