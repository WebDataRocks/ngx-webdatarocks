import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebdatarocksPivotModule  } from 'dist/ngx-webdatarocks';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebdatarocksPivotModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
