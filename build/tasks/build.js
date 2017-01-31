const webpack = require('webpack');



function compile() {
  function compilerCallback(err, stats) {
    if(err) {
      console.error(err.stack || err);
      if(err.details) console.error(err.details);
      process.exit(1); // eslint-disable-line
    }
    const outputOptions = {
        chunks: true,
        colors: true
    };

    process.stdout.write(stats.toString(outputOptions) + "\n");

    if(stats.hasErrors()) {
      process.on("exit", function() {
        process.exit(2); // eslint-disable-line
      });
    }
  }

  const cfg = require('../webpack/webpack-dist.conf');
  var compiler = webpack(cfg);


  var ProgressPlugin = require("webpack/lib/ProgressPlugin");
		compiler.apply(new ProgressPlugin({
			profile: true
		}));

  compiler.run(compilerCallback);
}
console.log('running build ...');
compile();