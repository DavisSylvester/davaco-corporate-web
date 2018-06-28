import { Component, OnInit, Input, AfterViewInit } from "@angular/core";



@Component({
    selector: "dav-navigation",
    moduleId: __moduleName,
    templateUrl: "../Html/Navigation.html",
    styleUrls: [
        "../Html/Navigation.css"
    ],
    animations: [

    ]
})


export class Navigation implements OnInit, AfterViewInit  {

    // Properties and Fields
    @Input("logo") public logo;
    @Input("menu-items") public menuItems = "";

    public menuItemsConverted: string[] = [];


    
    constructor() {

        this.Init();

    }

    private Init(): void {

    }

    public ngOnInit(): void {

    }

    public ngAfterViewInit(): void {
        
        this.menuItemsConverted = this.createMenuItemArray(this.menuItems);

        console.log(`menuItemsConverted: ${this.menuItemsConverted}`);

    }

    public onMenuItemClicked(item: string): void {
        console.log(`Menu Item clicked: ${item}`);
    }

    private createMenuItemArray(items: string): string[] {

        if (items.indexOf(',') === -1) {
            return [];
        }

        return items.split(',');
    }

    
}
