//id nombre descripcion idUsuario listaCanciones

import mongoose from 'mongoose';
import {Cancion} from './cancion';
import {User} from './user';
const {Schema} = mongoose;


const listaSchema =new Schema({

    
    nombre:String,
    descripcion:String,
    idUsuario:{
        type: mongoose.ObjectId,
        ref:"User",
    },
    listaCanciones:[
        {
            type:mongoose.ObjectId,
            ref:"Cancion",
        }
    ]

})

const Lista = mongoose.model('Lista',listaSchema);

const ListaRepository ={


    async findAll(idUsuario){
        const result = await Lista.find({idUsuario:idUsuario,}).populate("listaCanciones").exec();
        return result != null ? result : undefined;
    },

    async descripcionLista(id,idUsuario){
        const result = await Lista.findOne({_id: id, idUsuario: idUsuario,}).exec();
        return result;
    },


    async create(nuevaLista) {
        const lista = new Lista({
            nombre: nuevaLista.nombre,
            descripcion: nuevaLista.descripcion,
            idUsuario:nuevaLista.idUsuario
        });
        const result = await lista.save();
        return result;
    },

    async updateById(id, listaModificada,idUsuario) {
        const lista = await Lista.findOne({_id:id, idUsuario:idUsuario}).exec();
        if (lista == null) {
            return undefined;
        } else {
            return await Object.assign(lista, listaModificada).save();
        }
    },

    async delete(id,idUsuario) {
        await Lista.deleteOne({_id: id,idUsuario:idUsuario}).exec();
    },

//lista+canciones

    async cancionesLista(id,idUsuario){
        const lista= await Lista.findOne({_id:id, idUsuario:idUsuario}).populate('listaCanciones').exec();
        if(lista !=null){
            return lista.listaCanciones;
        }
    },

    async addCancion(id,idCancion,idUsuario){
        const lista = await Lista.findOne({_id:id, idUsuario:idUsuario}).populate('listaCanciones').exec();
        const cancion = await Cancion.findById(idCancion);
        if(lista != null && cancion != null){
            lista.listaCanciones.push(cancion);
            await lista.save();
            return lista;
        }
    },

    async cancionLista(id,idCancion,idUsuario){

    },

    async eliminarCancion(id,idCancion,idUsuario){
        const lista = await Lista.findOne({_id:id, idUsuario:idUsuario}).populate('listaCanciones').exec();
        const cancion = await Cancion.findById(idCancion);
        if(lista != null && cancion != null){
            let indice= undefined;
            for(let i=0;i<lista.listaCanciones.length;i++){
                if(lista.listaCanciones[i]._id=idCancion){
                    indice=i;
                }
            }
            lista.listaCanciones.splice(indice,1);
            await lista.save();
            return lista;
        }
    }


}


export {

    Lista, 
    ListaRepository
}