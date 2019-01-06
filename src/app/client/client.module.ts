import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClientRoutingModule} from "./client-routing.module";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule

  ]
})
export class ClientModule {


}
