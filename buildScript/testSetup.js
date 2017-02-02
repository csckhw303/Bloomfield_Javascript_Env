require("babel-register")(); //before mocha test need to babel transpile

require.extensions[".css"] = function() {};//css mocha does not understand
