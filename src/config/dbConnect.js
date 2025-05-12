import mongoose from "mongoose";



async function conectarDb(){
  mongoose.connect(process.env.DB_CONNECTION_STRING)

  return mongoose.connection;
}



export default conectarDb;