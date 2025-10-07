import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';

dotenv.config();

const register = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await UserModel.create(
            {data:{
                email: email,
                username: username,
                password: hashedPassword
            }}
        )
        res.status(201).json(user)
    } catch (error) {
        res.status(501).json({error: error.message})  
    }
}


const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await UserModel.getByName(username);
        const verificarContraseña = await bcrypt.compare(password, user.password);
        if (!user) {
            res.status(204).json({ error: "Usuario no encontrado" });
        }
        if (!verificarContraseña) {
            res.send("La contraseña es incorrecta");

        }
    } catch (error) {
        res.status(501).json({ error: error.message });       
        
    }

}

export const UserController = {
    register,
    login
}