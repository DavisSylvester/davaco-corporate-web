System.register(["@angular/core", "@angular/platform-browser", "@angular/platform-browser/animations", "@angular/forms", "@angular/http", "@angular/common/http", "./Components/index", "./routes/app.routes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, platform_browser_1, animations_1, forms_1, http_1, http_2, index_1, app_routes_1, AppModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        animations_1.BrowserAnimationsModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule,
                        app_routes_1.routing,
                        http_1.HttpModule,
                        http_2.HttpClientModule,
                    ],
                    declarations: [
                        index_1.MainComponent, index_1.NotFound
                    ],
                    entryComponents: [],
                    bootstrap: [index_1.MainComponent],
                    providers: []
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map