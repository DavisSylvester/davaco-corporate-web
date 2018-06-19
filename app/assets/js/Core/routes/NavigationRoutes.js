System.register(["../Components/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NavigationRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("NavigationRoutes", NavigationRoutes = [
                { path: "", redirectTo: "/", pathMatch: "full" },
                { path: "401", component: index_1.NotFound }
            ]);
        }
    };
});
//# sourceMappingURL=NavigationRoutes.js.map