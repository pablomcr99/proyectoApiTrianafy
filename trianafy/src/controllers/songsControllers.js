// post songs
//get songs
// get song/{id}
//put song/{id}
//delete song/{id}

// post /lists/{id1}/song/{id2}
// get /lists/{id1}/song/{id2}
// get /lists/{id}/songs
// delete /lists/{id1}/song/{id2}

import {CancionRepository} from '../models/cancion';


const CancionController = {



//get /songs/
    todasLasCanciones: async (req, res) => {
        const data = await CancionRepository.findAll();
        if (Array.isArray(data) && data.length > 0){
            res.json(data);
        }
        else
            res.sendStatus(404);
    },

// get song/{id}
    cancionPorId: async (req, res) => {
        let cancion = await CancionRepository.findById(req.params.id);
        if (cancion != undefined)
            res.json(cancion);
        else
            res.sendStatus(404);
    },

//post songs
    nuevaCancion: async (req, res) => {
        let cancion = await CancionRepository.create({
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year
        });
        res.status(201).json(cancion);
    },

    editarCancion: async (req, res) => {
        let cancion = await CancionRepository
            .updateById(req.params.id, {
                title: req.body.title,
                artist: req.body.artist,
                album: req.body.album,
                year: req.body.year
            });
        if (cancion != undefined) {
            res.json(cancion);
        } else {
            res.sendStatus(404);
        }
    },

    eliminarCancion: async (req, res) => {
        await CancionRepository.delete(req.params.id);
        res.sendStatus(204);
    },

    



}

export {
    CancionController
}