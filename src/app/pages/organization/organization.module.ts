import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization/organization.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [OrganizationComponent,OrganizationListComponent],
  imports: [
    CommonModule
  ]
})
export class OrganizationModule { }
