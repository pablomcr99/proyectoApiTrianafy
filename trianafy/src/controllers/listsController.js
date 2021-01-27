// post /lists
// get /lists
// get /list/{id}
// put /list/{id}

//delete /list/{id}

// post /lists/{id1}/song/{id2}
// get /lists/{id1}/song/{id2}
// get /lists/{id}/songs
// delete /lists/{id1}/song/{id2}

import {ListaRepository} from '../models/lista';


const ListaController = {



//get /lists/
    todasLaslistas: async (req, res) => {
        const data = await ListaRepository.findAll();
        if (Array.isArray(data) && data.length > 0){
            res.json(data);
        }
        else
            res.sendStatus(404);
    },

// get list/{id}
    listaPorId: async (req, res) => {
        let cancion = await ListaRepository.findById(req.params.id);
        if (cancion != undefined)
            res.json(cancion);
        else
            res.sendStatus(404);
    },

//post list
    nuevaLista: async (req, res) => {
        let lista = await ListaRepository.create({
            
        });
        res.status(201).json(lista);
    },

    editarLista: async (req, res) => {
        let lista = await ListaRepository
            .updateById(req.params.id, {
                
            });
        if (lista != undefined) {
            res.json(lista);
        } else {
            res.sendStatus(404);
        }
    },

    eliminarLista: async (req, res) => {
        await ListaRepository.delete(req.params.id);
        res.sendStatus(204);
    },

    



}

export {
    ListaController
}