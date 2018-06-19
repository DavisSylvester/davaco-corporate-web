System.register(["@angular/router", "./NavigationRoutes"], function (exports_1, context_1) {
    "use strict";
    var router_1, NavigationRoutes_1, routes, appRoutingProviders, routing;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (NavigationRoutes_1_1) {
                NavigationRoutes_1 = NavigationRoutes_1_1;
            }
        ],
        execute: function () {
            routes = [];
            console.log(NavigationRoutes_1.NavigationRoutes);
            routes.push(...NavigationRoutes_1.NavigationRoutes);
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routes.js.map