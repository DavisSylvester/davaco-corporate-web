import { Component, OnInit, Input } from "@angular/core";



@Component({
    selector: "sf-action-card",
    moduleId: __moduleName,
    templateUrl: "../Html/ActionCardComponent.html",
    styleUrls: [
        "../Html/ActionCardComponent.css"
    ],
    animations: [

    ]
})


export class ActionCardComponent implements OnInit  {

    // Properties and Fields
    @Input('card-title') public cardTitle = "";
    @Input('card-icon') public cardIcon = "";
    @Input('card-bg') public cardBackground = "#fff";
    

    
    constructor() {

        this.Init();

    }

    private Init(): void {

    }

    public ngOnInit(): void {

    }

    
}
