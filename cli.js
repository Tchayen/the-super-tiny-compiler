var theSuperTinyCompiler = require('./lib/the-super-tiny-compiler.js');
console.log(
  theSuperTinyCompiler
    .default
    .compiler(process.argv[2])
);
