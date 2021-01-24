import { validar } from '../middlewares/validacion';
import { param, body } from 'express-validator';
import { UserController} from '../controllers/userController';

// Resto del código

router.get('/users', UserController.todosLosUsuarios)

router.get('/user/:id', 
    /*[
        param('id').isInt().withMessage('ID debe ser un número entero')
    ],
    validar,*/
    UserController.usuarioPorId);

router.post('/user/', [
        body('username').isLength({min: 5}).withMessage('La longitud mínima del nombre de usuario son 5 caracteres'),
        body('email')
            .isEmail()
            .withMessage('El campo email debe ser un email válido')
            .custom(async email => {
                if(await emailExists(email)) {
                    throw new Error('El email ya está registrado. Proporcione un valor diferente');
                } else {  
                    return true;
                }
            }),
        body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente')
    ],
    validar, 
    UserController.nuevoUsuario);

router.post('/user/', [
        body('username').isLength({min: 5}).withMessage('La longitud mínima del nombre de usuario son 5 caracteres'),
        body('email')
            .isEmail()
            .withMessage('El campo email debe ser un email válido')
            .custom(email => {
                if(emailExists(email)) {
                    throw new Error('El email ya está registrado. Proporcione un valor diferente');
                } else {  
                    return true;
                }
            }),
        body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente')
    ],
    validar, 
    UserController.nuevoUsuario);