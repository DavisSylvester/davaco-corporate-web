export const ApplicationConfiguration: any  = {

    "Application": {
        "Settings": {
            "Source" : { 
                "Root": "./src",
                "Less": `./src/assets/less`, 
                "LessFiles": `./src/assets/less/*.less`, 
                "TypescriptRoot" : `./src/assets/ts`,
                "TypescriptFiles" : `./src/assets/ts/**/*.ts`,
                "TypescriptLessFiles" : `./src/assets/ts/**/*.less`
            }, 
            "ApplicationDestination": { 
                "Root" : "./app", 
                "Css": `./app/assets/css`, 
                "CssFiles": `app/assets/css/*.css`, 
                "TypescriptRoot" : `./app/assets/js`,
                "TypescriptFiles" : `./app/assets/js/**/*.js`
            }, 
            "Angular": { 
                "Root" : "./src/assets/ts",
                "Destination": "./app/assets/js",
                "Html": `./src/assets/ts/**/*.html`
                
            },
            "Build": {
                Root: "./dist/"
            }           
        }
    }    
};

