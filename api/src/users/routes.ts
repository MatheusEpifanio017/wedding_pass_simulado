import { Router } from 'express';
import bcrypt from 'bcrypt';
import { AppDataSource } from '../database/dataSource';
import { User } from '../database/entities/users';


const usersRouter = Router();
const userRepository = AppDataSource.getRepository(User)

usersRouter.get('/', async (req, res) => { 
    const data = await userRepository.find();
    return res.json({ data });
});

usersRouter.post('/', async (req, res) => {
    const body = req.body 
    body.password = await bcrypt.hash(body.password, 10)
    const user = userRepository.create(body as User);
    await userRepository.save(user);
    const { password, ...data } = user;
    return res.json({ message: "Usuário criado", data })
});

usersRouter.put('/:id', async (req, res) => {
    const data = await userRepository.update(req.params.id, req.body);
    return res.json({ message: "Usuário atualizado", data })
});

usersRouter.delete('/:id', async (req, res) => {
    const data =  await userRepository.delete(req.params.id);
    return res.json({ message: "Usuário deletado", data })
});

export default usersRouter;