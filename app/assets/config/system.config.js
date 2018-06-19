/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      'assets': 'assets', // 'dist',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // angular testing umd bundles
      '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
      '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
      '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
      '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
      '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
      '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
      '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
      '@angular/animations/browser':'npm:@angular/animations/bundles/animations-browser.umd.js',
      
      // Adding RXJS 6
      'rxjs': 'npm:rxjs',
      'rxjs-compat': 'npm:rxjs-compat',  
           

      'tslib': 'npm:tslib',   
      'tsg-web-storage': "npm:tsg-web-storage",
      'tsg-calendar-lib': 'npm:tsg-calendar-lib/app',
      'slyMaterial': 'npm:slymaterial'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'assets': {
        main: './js/Core/Main.js',
        defaultExtension: 'js'
      },
      "rxjs": {
        main: "./bundles/rxjs.umd.min.js",
        defaultExtension: "js",
        "meta": {
          "./*": {
              "esModule": true
          }
      }
      },
      "rxjs-compat": {
        main: "./index.js",
        defaultExtension: "js",
        "meta": {
          "./*": {
              "esModule": true
          }
      }
      },      
      "rxjs/operators": {
        main: "./index.js",
        defaultExtension: "js",
        "meta": {
          "./*": {
              "esModule": true
          }
      }
      },      
      "rxjs/internal-compatibility": {
        main: "./index.js",
        defaultExtension: "js",
        "meta": {
          "./*": {
              "esModule": true
          }
      }
      },      
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'tslib': {
        main: './tslib.js',
        defaultExtension: 'js'
      },      
      'tsg-calendar-lib': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'tsg-web-storage': {
        main: "./dist/index.js",
        defaultExtension: 'js'
      },
      'slyMaterial': {
        main: "./build/index.js",
        defaultExtension: 'js'
      }
    }
  });
  // System.config(config);

  // System.register('tsg-web-storage');
})(this);