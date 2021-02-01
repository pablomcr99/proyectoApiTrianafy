
import {Cancion,CancionRepository} from '../models/cancion';


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
        try{
            let cancion = await CancionRepository.create({
                title: req.body.title,
                artist: req.body.artist,
                album: req.body.album,
                year: req.body.year
            });
            res.status(201).json(cancion);
        }catch(error){
            res.status(400).json({Error:`Se ha producido un error con su peticion :${error.message}`})
        }
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
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    },

    eliminarCancion: async (req, res) => {
        const result=await CancionRepository.delete(req.params.id);
        if(result != undefined){
            res.sendStatus(204)
        }else{
            res.sendStatus(404);
        }
    },

    



}

export {
    CancionController
}