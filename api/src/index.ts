import express, { request, response } from 'express';
import pkg from '../package.json';
import { AppDataSource } from './database/dataSource';
import { Router } from 'express';

async function main(){

    const app = express();
    const usersRouter = Router();
    
    await AppDataSource.initialize();
    app.get("/", (req, res) => {
        res.json({ name: pkg.name, version: pkg.version })
    });

    // usersRouter.get('/', (request, response): => {
    //     return response.json()
    // });

    // app.put("/users/update/:id", )

    // app.delete("/users/delete/:id",)

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    });

};
main();