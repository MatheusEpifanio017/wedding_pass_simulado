import { Router } from "express";
import jwt from "jsonwebtoken"
import { AppDataSource } from "../database/dataSource";
import { User } from "../database/entities/users";


const authRouter = Router();
const userRepository = AppDataSource.getRepository(User)

authRouter.post('/login', async (req, res) => {
    const data = await userRepository.findOneBy({ email: req.body.email })
    if (!data || data.password != req.body.password) {
        return res.status(401).json({ message: "Credenciais inválidas"})
    }
    const token = jwt.sign({ id: data.id, email: data.email }, 'secret' );
    res.json({ message: "Login realizado com sucesso", token });
});

export default authRouter;