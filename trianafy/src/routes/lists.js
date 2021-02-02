import { Router } from 'express';
import { ListaController } from '../controllers/listsController';
import { body } from 'express-validator';
import {token} from '../services/passport';
import { validar } from '../middlewares/validacion';

const router = Router();

router.get('/',token(), ListaController.todasLaslistas);

router.get('/:id',token(), ListaController.descPorId);

router.post('/',token(),validar, ListaController.nuevaLista);

router.put('/:id',token(),validar, ListaController.editarLista);

router.delete('/:id',token(), ListaController.eliminarLista);

//lista+canciones

router.get('/:id/songs',token(),ListaController.cancionesLista);

router.post('/:id/songs/:idCancion',token(),ListaController.addCancionALista);

router.post('/:id/songs/:idCancion',token(),ListaController.obtenerCancionLista);

router.delete('/:id/songs/:idCancion',token(),ListaController.eliminarCancionLista);


export default router;