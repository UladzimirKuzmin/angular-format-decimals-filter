angular-format-decimals-filter
===========================

Angular filter, which converts long numbers into abbreviated string.

## Installation

Install with [Bower](http://bower.io/):
```bash
$ bower install angular-format-decimals-filter
```

## Usage

Include the library:
```html
<script src="/bower_components/angular-format-decimals-filter/format-decimals.js"></script>
```

Import it to the angular applicaiton:
```javascript
angular.module('myApp', ['formatDecimals']);
```

Use it in the view:
```html
<div>{{ number | formatDecimals }}</div>
```
