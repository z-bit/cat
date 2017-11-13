[Home](../README.md)


## Installation
	• ng new cat
	• cd cat

#### Add external modules
	• yarn add lodash
	
	• yarn add @angular/material
	• yarn add @angular/cdk
	• yarn add @ngular/animations
	• yarn add hammerjs
	
	• yarn add @ngrx/store
	• yarn add @ngrx/effects
	• yarn add @ngrx/router-store 
	• yarn add @ngrx/store-devtools  
	• yarn add ngrx-store-freeze
	• yarn add @ngrx/db
	• yarn add github:ngrx/entity-builds (will become: @ngrx/entity)
	
	• !! check if it still compiles, otherwise find out which tool needs updating
	    • npm i -g @angular/cli
	    • npm i -g yarn
	    • node.js (mac: sudo n stable)
	    

#### Testing
    • yarn add --dev jest	
    • yarn add --dev @types/jest
    • yarn add --dev jest-preset-angular
    • yarn add --dev jasmine-marbles

*package.json*

    scripts: {
        ...,
        "test": "jest",
        "test:watch": "jest --watch"
    }
    
    after *devDependencies*
    "jest": {
      "preset": "jest-preset-angular",
      "setupTestFrameworkScriptFile": "<rootDir>/src/jestSetup.ts"
    }   
    
*src/jestSetup.ts*

    import 'jest-preset-angular';
    import './jestGlobalMocks';     
    
*src/jestGlobalMocks.ts*

    const mock = () => {
      let storage = {};
      return {
        getItem: key => key in storage ? storage[key] : null,
        setItem: (key, value) => storage[key] = value || '',
        removeItem: key => delete storage[key],
        clear: () => storage = {},
      };
    };
    
    Object.defineProperty(window, 'localStorage', {value: mock()});
    Object.defineProperty(window, 'sessionStorage', {value: mock()});
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ['-webkit-appearance']
    });
	    
	    
	    
## Stucture
* create subfolders in src/app
    * components
    * modules
    * shared
* move <i>app.component.*</i> into components
* adjust *app.module.ts*
* change default selector/directive prefix

*cat/.angular-cli.json*
```json    
    "app": [ "prefix": "cat"],    
```

*cat/tslint.json* 
```json
    "directive-selector": [true, "attribute", "cat", "camelCase"],
    "component-selector": [true, "element", "cat", "kebab-case"],
```


## Material
* [***app/app-material.ts***](./app-material.ts) contains AppMaterialModule
* BrowserAnimationsModule

*app/app.module.ts*
    
    import { AppMaterialModule } from '../app-material';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    
        imports: [
            AppMaterialModule,
            BrowserAnimationsModule,
        ]
* Material Themes and Icons
    
*src/styles.css*

    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
    @import '~https://fonts.googleapis.com/icon?family=Material+Icons';

* HammerJS for Animations

*src/main.ts*

	import 'hammerjs';



### Routing
* @angular/router comes with ng new base4
* Choice: 
    * instant loading for eccnet
    * lazy loading for all other modules
	
*app/app-routing.ts*

		import { Routes, RouterModule } from '@angular/router';
		
		const routes: Routes = [
		  {path: '', loadChildren: './core/core.module#CoreModule'}
		];
		export const AppRouting = RouterModule.forRoot(routes);
	
***app/app.module.ts***

		import { AppRouting } from './app-routing';
		...
		   imports: [
		      AppRouting,
		   ],
		...
		
***app/core/core-routing.ts***

		import { RouterModule, Routes } from '@angular/router';
		import { CoreComponent } from './core/core.component';
		
		const routes: Routes = [
		  {path: '', component: CoreComponent}
		];
		export const CoreRouting = RouterModule.forChild(routes);
	
***app/core/core.module.ts***

		import { CoreRouting } from './core-routing';
		...
		    imports: [
		        CoreRouting,
		    ],
		...
		
***app/app.component.ts***

		import { Component } from '@angular/core';
		
		@Component({
		  selector: 'app-root',
		  template: '<router-outlet></router-outlet>'
		})
		export class AppComponent {}
		

### Debugging

*main.ts*

    // Implementation of Observable.debug(message)
    import { Observable } from 'rxjs/Observable';
    const debuggerOn = true;
    Observable.prototype.debug = (message: string) => {
      if (debuggerOn) {
        return this.do(
          nextValue => console.log(message, nextValue),
          error => console.log(message, error),
          () => console.log('Observable completed - ', message)
        );
      } else {
        return this;
      }
    };
    declare module 'rxjs/Observable' {
      interface Observable<T> {
        debug: (...arg) => Observable<T>
      }
    }

#### Assets outside src/assets, e.g.: src/app/core/assets

*.angular-cli.json*
    
    "assets": [
            "favicon.ico",
            "app/core/assets"
    ],
* refer to core assets like this:  ```<img src="app/core/assets/picture.png">```	


##
[Home](../README.md)