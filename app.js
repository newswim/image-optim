var Imagemin = require('imagemin');
var imageminWebp = require('imagemin-webp');


new Imagemin()
    .src('_originals/*.{gif,jpg,png,svg}')
  	.dest('dest')
  	.use(Imagemin.jpegtran({progressive: true, rotate: 90}))
  	.run(function (err, files) {
  		  console.log(files[0]);
  		  // => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
  	});
