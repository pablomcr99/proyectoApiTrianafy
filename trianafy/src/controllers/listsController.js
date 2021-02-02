import {param} from 'express-validator';
import {ListaRepository,Lista} from '../models/lista';
import {mongoose} from 'mongoose';


const ListaController = {



//get /lists/
    todasLaslistas: async (req, res) => {
        const lista = await ListaRepository.findAll(req.user.id);
        if (Array.isArray(lista) && lista.length > 0){
            res.json(lista);
        }
        else{
            res.sendStatus(404);
        }
    },

// get list/{id}
    descPorId: async (req, res) => {
        let lista = await ListaRepository.descripcionLista(req.params.id,req.user.id);
        if (lista != undefined)
            res.json(lista.descripcion);
        else
            res.sendStatus(404);
    },

//post list
    nuevaLista: async (req, res) => {
        try{
            let lista = await ListaRepository.create({
                nombre:req.body.nombre,
                descripcion:req.body.descripcion,
                idUsuario:req.body.idUsuario
            });
            res.status(201).json(lista);
        }catch(error){
            res.status(400).json({Error:`Se ha producido un error con su peticion :${error.message}`})
        }
    },

    //update list
    editarLista: async (req, res) => {
        let lista = await ListaRepository.updateById(req.params.id, {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }, req.user.id);
        if (lista != undefined) {
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    },

    //delete list
    eliminarLista: async (req, res) => {
        await ListaRepository.delete(req.params.id, req.user.id);
        res.sendStatus(204);
    },

//lista+canciones

    cancionesLista: async(req,res) =>{
        let canciones = await ListaRepository.cancionesLista(req.params.id, req.user.id);
        if(canciones !=null){
            res.json(canciones);
        }else{
            res.status(404);
        }
    },

    addCancionALista:async(req,res)=>{
        let cancion = await ListaRepository.addCancion(req.params.id,req.params.idCancion,req.user.id);
        if(cancion !=null){
            res.json(cancion);
        }else{
            res.sendStatus(404);
        }
    },

    obtenerCancionLista:async(req,res)=>{
        let result = await ListaRepository.cancionLista(req.params.id,req.params.idCancion,req.user.id);
        if(result==null){
            res.sendStatus(404);
        }else{
            res.json(result);
        }
    },

    eliminarCancionLista: async(req,res) =>{
        let result = await ListaRepository.eliminarCancion(req.params.id,req.params.idCancion,req.user.id);
        if(result !=null){
            res.sendStatus(204);
        }else{
            res.sendStatus(404);
        }
    }

    



}

export {
    ListaController
}