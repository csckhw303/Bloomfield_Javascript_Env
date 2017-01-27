import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev.js";

const port = 3000;
const app = express();
//const compiler = webpack(config);


//handle this way
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
})


//go listen the port
app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
})