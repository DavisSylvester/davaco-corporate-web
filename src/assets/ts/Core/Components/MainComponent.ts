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

@HostListener('window:scroll')
public onscroll(): void {
    // console.log(window.pageYOffset);

    if (window.pageYOffset > 95) {
        this.navIsFixed = true;
    }
    else {
        this.navIsFixed = false;
    }
    

  }

  

    public Title = "Main Component Title";
    public navIsFixed = false;


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
