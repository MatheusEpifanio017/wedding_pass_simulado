import { Router } from "express";
import { AppDataSource } from "../database/dataSource";
import { Guest } from "../database/entities/guests";

const guestsRouter = Router();
const guestsRepository = AppDataSource.getRepository(Guest)

guestsRouter.get('/', async (req, res) => { 
    const data = await guestsRepository.find();
    return res.json({ data });
});

guestsRouter.post('/', async (req, res) => {
    const data = guestsRepository.create(req.body);
    await guestsRepository.save(data)
    return res.json({ message: "Convidado criado", data })
});


guestsRouter.put('/:id', async (req, res) => {
    const data = await guestsRepository.update(req.params.id, req.body);
    return res.json({ message: "Convidado atualizado", data })
});

guestsRouter.delete('/:id', async (req, res) => {
    const data =  await guestsRepository.delete(req.params.id);
    return res.json({ message: "Convidado deletado", data })
});

export default guestsRouter;