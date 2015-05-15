### master

### v0.3.3
* [ENHANCEMENT] Updated `bcrypt`
* [BUGFIX] Updated `express-jwt` and `jsonwebtoken` to fix security issues
* [BUGFIX] Fixed some ember 2.0 deprecation warnings
* [BUGFIX] Fixed JSHint unused variable warning
* [BUGFIX] Allow public access to the `AppController` `serve` function, which otherwise causes issues when deploying


### v0.3.2
* [ENHANCEMENT] Generate model and template separate so ember doesn't even ask to override the route.

### v0.3.1
* [BUGFIX] Sails Server does not crash anymore when logging in with credentials that do not exists
