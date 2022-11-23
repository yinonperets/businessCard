const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose
.connect(`mongodb+srv://yinon:Yinon1995y@cluster0.oa7p57h.mongodb.net/test`)
.then(()=>
console.log(chalk.magentaBright("connected successfully to mongoDB atlas")
)).catch((error)=>{
 console.log(chalk.redBright.bold(`mongoDB error: couldn't connect to mongoDB: ${error}`));
});



