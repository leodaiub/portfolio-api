"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.group(() => {
  Route.resource("posts", "PostController")
    .apiOnly()
    .middleware(
      new Map([[["posts.store", "posts.update", "posts.delete"], ["auth"]]])
    );
});

Route.group(() => {
  Route.resource("projects", "ProjectController")
    .apiOnly()
    .middleware(
      new Map([
        [["projects.store", "projects.update", "projects.delete"], ["auth"]]
      ])
    );
});
