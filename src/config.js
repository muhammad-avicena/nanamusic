require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "OTM3MTcxMTQyMTkwNDMyMjU3.YfX2pA.8C9wFWwpZwYu3a86o-7b8PqzFik",  // your bot token
    prefix: process.env.PREFIX || "n!", // bot prefix
    ownerID: process.env.OWNERID || "234301642768384010", //your discord id
    mongourl: process.env.MONGO_URI || "mongodb://newuser:newuser@cluster0-shard-00-00.uf6th.mongodb.net:27017,cluster0-shard-00-01.uf6th.mongodb.net:27017,cluster0-shard-00-02.uf6th.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-6cm745-shard-0&authSource=admin&retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "836641517438763087", // channel id for guild create and delete logs

    nodes: [
    {
      host: process.env.NODE_HOST || "disbotlistlavalink.ml",
      identifer: process.env.NODE_ID || "local",
      port: parseInt(process.env.NODE_PORT || "443"),
      password: process.env.NODE_PASSWORD || "LAVA",
      secure: parseBoolean(process.env.NODE_SECURE || "true"),

    }
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
