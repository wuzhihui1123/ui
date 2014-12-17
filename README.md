Rancher UI
--------

Perhaps you like managing cattle.

[![Build Status](http://drone.rancher.io/api/badge/github.com/rancherio/ui/status.svg?branch=master)](http://drone.rancher.io/github.com/rancherio/ui)

## Usage

Prerequisites:
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)

Install dependencies:
```bash
  git clone 'https://github.com/rancherio/ui'
  cd 'ui'
  git submodule init
  git submodule update
  npm install
  bower install
  brew install watchman # (or https://facebook.github.io/watchman/docs/install.html)
```

Run development server
```bash
  npm start
```

Connect to UI at http://localhost:8000/ .  The server automatically picks up file changes, restarts itself, and reloads the web browser.

### Compiling for distribution

The built-in cattle server expects to be run from `/static/` and hosted on a CDN.  To generate the CDN files, run:
```bash
  ./scripts/build-static
```

### Running Tests

* `ember test`
* `ember test --server`


#### Useful links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

License
=======
Copyright (c) 2014 [Rancher Labs, Inc.](http://rancher.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
