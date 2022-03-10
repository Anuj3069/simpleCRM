import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContectComponent } from './add-contect/add-contect.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';



@NgModule({
  declarations: [
    AddContectComponent,
    AddContactComponent,
    EditContactComponent,
    ListContactComponent,
    DeleteContactComponent,
    ViewContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
