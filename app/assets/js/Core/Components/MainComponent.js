System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, router_1, MainComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            MainComponent = class MainComponent {
                constructor() {
                    this.Title = "Main Component Title";
                    this.navIsFixed = false;
                    console.log("Starting Main Component");
                }
                onscroll() {
                    if (window.pageYOffset > 95) {
                        this.navIsFixed = true;
                    }
                    else {
                        this.navIsFixed = false;
                    }
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                }
                onScroll(evt) {
                    console.log(`evt:n${evt}`);
                    console.log(`Scroll event fired`);
                }
            };
            __decorate([
                core_1.HostListener('window:scroll'),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], MainComponent.prototype, "onscroll", null);
            MainComponent = __decorate([
                core_1.Component({
                    selector: "main-app",
                    moduleId: __moduleName,
                    templateUrl: "../html/index.html",
                    styleUrls: ["../html/styles.css"],
                    providers: [router_1.RouterModule]
                }),
                __metadata("design:paramtypes", [])
            ], MainComponent);
            exports_1("MainComponent", MainComponent);
        }
    };
});
//# sourceMappingURL=MainComponent.js.map