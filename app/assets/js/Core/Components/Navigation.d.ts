import { OnInit, AfterViewInit } from "@angular/core";
export declare class Navigation implements OnInit, AfterViewInit {
    logo: any;
    menuItems: string;
    menuItemsConverted: string[];
    constructor();
    private Init;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onMenuItemClicked(item: string): void;
    private createMenuItemArray;
}
