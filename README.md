# gulp-json-concat-with-path
> Concatenate json files to specified file containing a key with a path to each json file.

## Usage
```shell
npm install --save-dev gulp-json-concat-with-path
```


```javascript
var jsonConcat = require('gulp-json-concat-with-path');

gulp.src('*.json')
	.pipe(jsonConcat('output.json')
	.pipe(gulp.dest('outputFolder'));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)