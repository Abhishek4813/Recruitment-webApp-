const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(process.env.DATABASE_KEY,
   { useNewUrlParser: true,
    useUnifiedTopology: true 
   }
   
   );

  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Error while connecting to the Mongo DB");
  });
}

module.exports = {
  connectToDatabase,
};
