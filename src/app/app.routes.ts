import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';
import { Login } from './login';
import { Register } from './register';
import { BookACrew } from './book-a-crew';

import { DataResolver } from './app.resolver';
import { AuthGuard, UnauthGuard } from './core/auth';

export const routes: RouterConfig = [
  { path: '',      component: Home, canActivate: [AuthGuard]  },
  { path: 'login', component: Login, canActivate: [UnauthGuard] },
  { path: 'register', component: Register, canActivate: [UnauthGuard] },
  { path: 'home',  component: Home, canActivate: [AuthGuard] },
  { path: 'book-a-crew',  component: BookACrew, canActivate: [AuthGuard] },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About', canActivate: [AuthGuard],
    resolve: {
      'yourData': DataResolver
    }
  },
  // async components with children routes must use WebpackAsyncRoute
  { path: 'detail', component: 'Detail',
    canActivate: [ WebpackAsyncRoute, AuthGuard ],
    children: [
      { path: '', component: 'Index' }  // must be included
    ]},
  { path: '**',    component: NoContent, canActivate: [AuthGuard] },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'About': require('es6-promise-loader!./about'),
  'Detail': require('es6-promise-loader!./+detail'),
  'Index': require('es6-promise-loader!./+detail'), // must be exported with detail/index.ts
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail'],
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
