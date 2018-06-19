import { Component, OnInit, AfterViewInit } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
    selector: "main-app",
    moduleId: __moduleName,
    templateUrl: "../html/index.html",
    styleUrls: ["../html/styles.css"],
    providers: [RouterModule]
})




export class MainComponent implements OnInit, AfterViewInit {


    public Title = "Main Component Title";



    constructor() {


        console.log("Starting Main Component");
        

    }

    public ngOnInit(): void {
       

        

    }

    public ngAfterViewInit(): void {




    }



    
    

}
