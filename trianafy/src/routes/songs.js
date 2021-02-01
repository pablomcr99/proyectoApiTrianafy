import { Router } from 'express';
import { CancionController } from '../controllers/songsControllers';
import { body } from 'express-validator';
import {token} from '../services/passport';
import { validar } from '../middlewares/validacion';

const router = Router();

router.get('/',token(), CancionController.todasLasCanciones);

router.get('/:id',token(), CancionController.cancionPorId);

router.post('/',token(),validar, CancionController.nuevaCancion);

router.put('/:id',token(), CancionController.editarCancion);

router.delete('/:id',token(), CancionController.eliminarCancion);



export default router;