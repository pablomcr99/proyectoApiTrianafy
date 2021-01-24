import { Router } from 'express';
import { CancionController } from '../controllers/songsControllers';
import {token} from '../services/passport';

const router = Router();

router.get('/songs',token(), CancionController.todasLasCanciones);

router.get('/song/:id',token(), CancionController.cancionPorId);

router.post('/song/',token(), CancionController.nuevaCancion);

router.put('/song/:id',token(), CancionController.editarCancion);

router.delete('/song/:id',token(), CancionController.eliminarCancion);



export default router;