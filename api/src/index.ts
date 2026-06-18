import express from 'express';
import pkg from '../package.json';
import { AppDataSource } from './database/dataSource';

async function main(){

    const app = express();
    
    await AppDataSource.initialize();
    app.get("/", (req, res) => {
        res.json({ name: pkg.name, version: pkg.version })
    });


    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    });

};
main();