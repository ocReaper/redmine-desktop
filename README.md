# [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# redmine-desktop
Native desktop Redmine client written in Angular.js with Electron

## Prerequisites

* Redmine 3.x
* Windows OS (for now)

## Usage

1. Install the latest `*.exe` file from the releases folder
1. Open the app
1. Fill in the `Redmine host` and the `Redmine API key` fields
1. Press `login`
1. PROFIT!!!

## Development

### Setup
1. Install [Node.js](http://nodejs.org/)
 - This will also install npm.
1. Run `npm install -g bower gulp yo generator-ng-poly@0.11.3`
 - This enables Bower, Gulp, and Yeoman generators to be used from command line.
1. Run `npm install` to install this project's dependencies
1. Run `bower install` to install client-side dependencies
1. Use [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) to create additional components
1. Run `gulp` to start the project

### Used priority colors

See this [colourlovers](http://www.colourlovers.com/palette/2077991/priority_authority) palette.

## License
The MIT License (MIT)

Copyright (c) 2015 Ákos Resch

See [LICENSE](https://github.com/ocReaper/redmine-desktop/blob/master/LICENSE.md).
