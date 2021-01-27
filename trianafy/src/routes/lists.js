// post /lists
// get /lists
// get /list/{id}
// put /list/{id}

//delete /list/{id}


import { Router } from 'express';
import { ListaController } from '../controllers/listsController';
import {token} from '../services/passport';

const router = Router();

router.get('/lists',token(), ListaController.todasLaslistas);

router.get('/list/:id',token(), ListaController.listaPorId);

router.post('/list/',token(), ListaController.nuevaLista);

router.put('/list/:id',token(), ListaController.editarLista);

router.delete('/list/:id',token(), ListaController.eliminarLista);



export default router;