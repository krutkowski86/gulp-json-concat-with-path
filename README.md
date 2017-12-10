# gulp-json-concat-with-path
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

## Usage
```shell
npm install --save-dev gulp-json-concat-with-path
```

** Concatenate json files to specified file containing a key with a path to each json file. **

```javascript
var jsonConcat = require('gulp-json-concat-with-path');

gulp.src('*.json')
	.pipe(jsonConcat('output.json')
	.pipe(gulp.dest('outputFolder'));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)