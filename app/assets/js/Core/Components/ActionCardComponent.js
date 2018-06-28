System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ActionCardComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ActionCardComponent = class ActionCardComponent {
                constructor() {
                    this.cardTitle = "";
                    this.cardIcon = "";
                    this.cardBackground = "#fff";
                    this.hasLongSubText = false;
                    this.maxSubTitleLength = 10;
                    this.Init();
                }
                Init() {
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                    console.log(`cardTitle: ${this.cardTitle.length}`);
                    this.hasLongSubText = (this.cardTitle.length > this.maxSubTitleLength) ? true : false;
                    console.log(`hasLongSubText:  ${this.hasLongSubText}`);
                }
            };
            __decorate([
                core_1.Input('card-title'),
                __metadata("design:type", Object)
            ], ActionCardComponent.prototype, "cardTitle", void 0);
            __decorate([
                core_1.Input('card-icon'),
                __metadata("design:type", Object)
            ], ActionCardComponent.prototype, "cardIcon", void 0);
            __decorate([
                core_1.Input('card-bg'),
                __metadata("design:type", Object)
            ], ActionCardComponent.prototype, "cardBackground", void 0);
            ActionCardComponent = __decorate([
                core_1.Component({
                    selector: "sf-action-card",
                    moduleId: __moduleName,
                    templateUrl: "../Html/ActionCardComponent.html",
                    styleUrls: [
                        "../Html/ActionCardComponent.css"
                    ],
                    animations: []
                }),
                __metadata("design:paramtypes", [])
            ], ActionCardComponent);
            exports_1("ActionCardComponent", ActionCardComponent);
        }
    };
});
//# sourceMappingURL=ActionCardComponent.js.map