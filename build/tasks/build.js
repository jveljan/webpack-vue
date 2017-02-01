const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');
const conf = require('../conf');
const paths = conf.path;

function copyStatic() {
  console.log(`copy ${src} to ${dest} ...`);
  const src = path.join(paths.src, 'assets/static');
  const dest = path.join(paths.dist, 'assets/static');
  fs.copySync(src, dest);
}


function compile() {
  console.log(`webpack compile ...`);
  function compilerCallback(err, stats) {
    if(err) {
      console.error(err.stack || err);
      if(err.details) console.error(err.details);
      process.exit(1); // eslint-disable-line
    }
    
    process.stdout.write(stats.toString(conf.webpack.stats) + "\n");

    if(stats.hasErrors()) {
      process.on("exit", function() {
        process.exit(2); // eslint-disable-line
      });
    }
  }

  const cfg = require('../webpack/webpack-dist.conf');
  var compiler = webpack(cfg);
  
  // can be added in config
  // var ProgressPlugin = require("webpack/lib/ProgressPlugin");
	// 	compiler.apply(new ProgressPlugin({
	// 		profile: true
	// 	}));

  compiler.run(compilerCallback);
}

console.log('running build ...');
console.log(`clean ${paths.dist}`);
fs.emptyDir(paths.dist, function() {
  copyStatic();
  compile();
});





