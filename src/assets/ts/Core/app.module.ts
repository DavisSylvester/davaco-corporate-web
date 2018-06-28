import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD
import { MainComponent, NotFound, ActionCardComponent }   from "./Components/index";
=======
import { MainComponent, NotFound, Navigation }   from "./Components/index";
>>>>>>> feature/Convert_header_to_Angular_Component
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
<<<<<<< HEAD
                  MainComponent, NotFound, ActionCardComponent
=======
                  MainComponent, NotFound, Navigation
>>>>>>> feature/Convert_header_to_Angular_Component
                ],
  entryComponents: 
                [

                ], 
  bootstrap:    [   MainComponent ],
  providers:    [ 
                    
                ]
})


export class AppModule { }
