# Angular ngFacebook Example

This is a example of how to use ngFacebook module to simplify Facebook Login. It's a very basic example which get permission to use your Facebook profile, and display your name.

This example only use simplify version of `angular seed`, to learn more about it, kindly head to [Angular Seed](https://github.com/angular/angular-seed) repository.

## Getting Started

To get you started you will have to prepare the following items:

### Prerequisites

You need to register your website to get a Facebook App id from [Facebook Developer](https://developers.facebook.com/).

### Steps

After you get your Facebook App ID, simply edit app.js and add it to:

```javascript
app.config(function($facebookProvider) {
  $facebookProvider.setAppId('[Your Facebook App ID]'); // Add your ID here
  ...
});

```

That's it. You are ready to go.

*For additional information, please visit [ngFacebook](https://github.com/GoDisco/ngFacebook).*

### Facebook JS SDK

This app using Facebook JS SDK version 2.2, it will change in the future.

License
--------
This project is released over [MIT license](http://opensource.org/licenses/MIT "MIT License")


Modules
--------
1. [Angular Seed](https://github.com/angular/angular-seed)
1. [ngFacebook](https://github.com/GoDisco/ngFacebook) - by [GoDisco](http://www.godisco.net)