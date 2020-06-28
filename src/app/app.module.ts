import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//third party module
import { TagInputModule } from 'ngx-chips';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const thirdPartyModule = [
  ChipsModule,
  ButtonModule,
  DialogModule,
  TagInputModule,
  FileUploadModule,
  MaterializeButtonModule,
    MaterializeCardModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...thirdPartyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
