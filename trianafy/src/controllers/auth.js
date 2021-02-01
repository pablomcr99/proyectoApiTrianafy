import 'dotenv/config';
import { JwtService } from '../services/jwt';
import bcrypt from 'bcryptjs';
import {User,userRepository} from '../models/user';

const AuthController = {

    register: async(req, res, next) => {
        try{
        let usuarioCreado = await userRepository.create({
            username: req.body.username,
            email: req.body.email,
            fullname: req.body.fullname, 
            password:bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS))});

                        
        res.status(201).json(usuarioCreado);
        }catch(err){
            res.status(404).json();
        }
    },
    login: async(req, res, next) => {
        
        const token = await JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }
    
}

export {
    AuthController
}