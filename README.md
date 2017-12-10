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

## Example

> /app/component1/data.json
```javascript
{
	"header": "component1"
}
```

> /app/component2/data.json
```javascript
{
	"header": "component2"
}
```

> output
```javascript
{
	"app\component1\data.json": {
		"header": "component1"
	},
	"app\component2\data.json": {
		"header": "component1"
	}
}
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
