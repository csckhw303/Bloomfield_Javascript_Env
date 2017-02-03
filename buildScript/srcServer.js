import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev.js";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

//handle this way
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
})

app.get("/users", function(req, res) {
    res.json([
       {id: 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@mamil.com" },
       {id: 1, "firstName":"Bob2", "lastName":"Smith2", "email":"bob2@mamil.com" },
       {id: 1, "firstName":"Bob3", "lastName":"Smith3", "email":"bob3@mamil.com" }
    ]);
});

//go listen the port
app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
})