import mongoose from "mongoose";

const url = "mongodb+srv://admin:QcLL0tDjDGdV9vL9@c.mifwrrz.mongodb.net/meubanco?retryWrites=true&w=majority&appName=C"


async function conectarDb(){
  mongoose.connect(url)

  return mongoose.connection;
}



export default conectarDb;