import express from "express";
import conectarDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
import "dotenv/config";

const conexao = await conectarDb();

conexao.on("error", (erro)=>{
  console.error("error ao conectar", erro);
})

conexao.once("open", ()=>{
  console.log("Conexao feita com sucesso")
})

const app = express();
routes(app);

app.listen(5000);
export default app;

