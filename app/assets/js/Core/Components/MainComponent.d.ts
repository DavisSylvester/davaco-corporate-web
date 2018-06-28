import { OnInit, AfterViewInit } from "@angular/core";
export declare class MainComponent implements OnInit, AfterViewInit {
    onscroll(): void;
    Title: string;
    navIsFixed: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onScroll(evt: Event): void;
}
