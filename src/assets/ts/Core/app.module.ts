import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MainComponent, NotFound }   from "./Components/index";
import { routing } from "./routes/app.routes";





@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    HttpClientModule,
    
    
     ],
  declarations: [
                  MainComponent, NotFound
                ],
  entryComponents: 
                [

                ], 
  bootstrap:    [   MainComponent ],
  providers:    [ 
                    
                ]
})


export class AppModule { }
