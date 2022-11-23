const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose.connect("mongodb://localhost:27017/yp_businness_card_app").then(()=>{
    console.log(chalk.magentaBright("connected successfully to mongoDB locally")
    
    );
}).catch((error)=>{
    console.log(chalk.redBright.bold(`mongoDB error: couldn't connect to mongoDB: ${error}`));

});