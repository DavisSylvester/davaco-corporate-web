import { OnInit, AfterViewInit } from "@angular/core";
export declare class ActionCardComponent implements OnInit, AfterViewInit {
    cardTitle: string;
    cardIcon: string;
    cardBackground: string;
    hasLongSubText: boolean;
    private maxSubTitleLength;
    constructor();
    private Init;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
