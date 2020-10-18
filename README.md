### Testing a React todo app with Webdriverio-v6 and Cucumber

Built using Amiya Pattnaik's [webdriverIO-with-cucumberBDD](https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD) amazing boilerplate as inspiration. If you want more examples, the WebdriverIO community offers a set of [boilerplate projects](https://webdriver.io/docs/boilerplate.html) to get you started with test automation.

What is usually the standard way of learning a new frontend framework? The answer is _Building a **Todo App**_. So, in a similar fashion, this repository contains the implementation of an automated test suite for a simple [React](https://reactjs.org/) todo App. WebdriverIO-v6 (Selenium - Node.js/JavaScript) allows us to demonstrate how to use the tool and develop an automation suite using the Cucumber (v6.x) BDD framework. It uses the `chromedriver` NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

It support ES5 to ES8 (via babel-register) and uses Grunt to manage tasks. It generate Spec, JUNIT, Allure, JSON reporters as well.

### Installation

This project is tested on **Node v12.0.0** and above. While earlier versions of node may be compatible, but they have not been verified.

`Node.JS:` Install from the site - https://nodejs.org/en/ take the LTS version based on your Operating system. Please make sure you install NodeJS globally. To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`. Otherwise you will need to install `npm install -g grunt-cli` globally.

`JDK 1.8:` It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.

### Selenium, Appium

To run your test you must have selenium / Appium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` and `services: ['appium']` in the \*.conf.js.

### Run Some Sample Tests

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option 1: `npm run test-local`. You can also run in SauceLabs and BrowserStack using `npm run test-sauce`, `npm run test-browserstack`.

Option 2: `grunt webdriver:test-local`. This executes all features in the [`./test/features/*.feature`] directory.
The default option for Grunt run is `webdriver:test-local`. But you can use `webdriver:test-sauce` or `test-browserstack` based on your requirements.

During development you may want to execute only just one feature. If that is the case, it can be achieved by using tag expressions. For example, if you want to execute only the _@UseFilters_ feature you should run `npm run test-local -- --cucumberOpts.tagExpression="@UFilters"` . For further details see https://cucumber.io/docs/cucumber/api/#running-a-subset-of-scenarios

To execute tests on `mobile device` use : `npm run test-mobile`.

Note: Before running mobile tests, perform the requisite Appium setup. For hassle free Appium setup on OSX refer [appium-setup-made-easy-OSX](https://github.com/amiya-pattnaik/appium-setup-made-easy-OSX), for Android please check [here](https://atasteofdottech.wordpress.com/2019/11/12/the-appium-boilerplate/) OR refer [Appium Docs](http://appium.io/docs/en/about-appium/getting-started/?lang=en)

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways. The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite. Config files can be found in the `/test/config/` directory and all end with `*.conf.js`. These can be called via the the cli.

### Licensing

MIT
