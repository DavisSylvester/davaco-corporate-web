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
    var core_1, Navigation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Navigation = class Navigation {
                constructor() {
                    this.menuItems = "";
                    this.menuItemsConverted = [];
                    this.Init();
                }
                Init() {
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                    this.menuItemsConverted = this.createMenuItemArray(this.menuItems);
                    console.log(`menuItemsConverted: ${this.menuItemsConverted}`);
                }
                onMenuItemClicked(item) {
                    console.log(`Menu Item clicked: ${item}`);
                }
                createMenuItemArray(items) {
                    if (items.indexOf(',') === -1) {
                        return [];
                    }
                    return items.split(',');
                }
            };
            __decorate([
                core_1.Input("logo"),
                __metadata("design:type", Object)
            ], Navigation.prototype, "logo", void 0);
            __decorate([
                core_1.Input("menu-items"),
                __metadata("design:type", Object)
            ], Navigation.prototype, "menuItems", void 0);
            Navigation = __decorate([
                core_1.Component({
                    selector: "dav-navigation",
                    moduleId: __moduleName,
                    templateUrl: "../Html/Navigation.html",
                    styleUrls: [
                        "../Html/Navigation.css"
                    ],
                    animations: []
                }),
                __metadata("design:paramtypes", [])
            ], Navigation);
            exports_1("Navigation", Navigation);
        }
    };
});
//# sourceMappingURL=Navigation.js.map