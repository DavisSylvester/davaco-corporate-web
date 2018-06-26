import { Component, OnInit, AfterViewInit, HostListener } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
    selector: "main-app",
    moduleId: __moduleName,
    templateUrl: "../html/index.html",
    styleUrls: ["../html/styles.css"],
    providers: [RouterModule]
})




export class MainComponent implements OnInit, AfterViewInit {

@HostListener('scroll')
public onscroll(): void {
    window.alert("Scrpp;");
    console.log(`Scroll event fired`);
  }


    public Title = "Main Component Title";



    constructor() {


        console.log("Starting Main Component");
        

    }

    public ngOnInit(): void {
       

        

    }

    public ngAfterViewInit(): void {




    }

    public onScroll(evt: Event): void {
        console.log(`evt:n${evt}`);
        console.log(`Scroll event fired`);

    }



    
    

}
