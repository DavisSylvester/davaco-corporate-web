import { Component, OnInit, Input, AfterViewInit } from "@angular/core";



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


export class ActionCardComponent implements OnInit, AfterViewInit  {

    // Properties and Fields
    @Input('card-title') public cardTitle = "";
    @Input('card-icon') public cardIcon = "";
    @Input('card-bg') public cardBackground = "#fff";
    
    public hasLongSubText = false;
    private maxSubTitleLength = 11;

    constructor() {

        this.Init();

    }

    private Init(): void {

    }

    public ngOnInit(): void {

    }

    public ngAfterViewInit(): void {
        console.log(`cardTitle: ${this.cardTitle.length}`);

        this.hasLongSubText = (this.cardTitle.length > this.maxSubTitleLength) ? true : false;

        console.log(`hasLongSubText:  ${this.hasLongSubText}`);
    }

    
}
