import app from "./app";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT || 3000

AppDataSource.initialize().then(() => {
    app.listen(PORT, () => console.log('rodando'))
}).catch(err => console.error("Erro ao conectar no banco: ", err))