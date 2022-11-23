
// const ENVIRNMENT = "dev";
const ENVIRNMENT = "prod"

const connctToDB = () =>{
    if(ENVIRNMENT === 'dev') require('./mongoDB/connectToMongoLocally');
     if(ENVIRNMENT === 'prod') require('./mongoDB/connectToAtlas');
          if(ENVIRNMENT === 'test') require('./mongoDB/connectToAtlas');

};
module.exports = connctToDB;
