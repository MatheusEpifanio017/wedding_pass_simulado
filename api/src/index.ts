import express, { request, response } from 'express';
import pkg from '../package.json';
import { AppDataSource } from './database/dataSource';
import usersRouter from './users/routes';
import guestsRouter from './guests/routes';
import authRouter from './login/routes';





async function main(){

    const app = express();
    

    app.use(express.json());
    
    await AppDataSource.initialize();
    app.get("/", (req, res) => {
        res.json({ name: pkg.name, version: pkg.version })
    });
    
    app.use("/users", usersRouter);
    app.use("/guests", guestsRouter);
    app.use("/auth", authRouter);

    // app.delete("/users/:id",)

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    });

};
main();