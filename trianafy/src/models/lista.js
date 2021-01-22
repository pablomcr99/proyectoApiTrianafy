//id nombre descripcion idUsuario listaCanciones

import mongoose from 'mongoose';
const {Schema} = mongoose;


const listaSchema =new Schema({

    id:String,
    nombre:String,
    descripcion:String,
    idUsuario:String,
    listaCanciones:Array

})

const Lista = mongoose.model('listas',listaSchema);

const ListaRepository ={


    async findAll(){
        return await Lista.find().exec();
    },


    async findById(id){
        const result = await (await Lista.findById(id)).exec();
        return result != null ? result : undefined;

    },

    async create(nuevaLista) {
        const lista = new Lista({
            id : nuevaCancion.id,
            title : nuevaCancion.title,
            artist : nuevaCancion.artist,
            album : nuevaCancion.album,
            year : nuevaCancion.year
        });
        const result = await lista.save();
        return result;
    },

    async updateById(id, listaModificada) {
        const lista = await Lista.findById(id);

        if (lista == null) {
            return undefined;
        } else {
            return await Object.assign(lista, listaModificada).save();
        }
    },

    async update(listaModificada) {
        return await this.updateById(listaModificada.id, listaModificada);
    },

    async delete(id) {
        await Lista.findByIdAndRemove(id).exec();
    }
}


export {

    Lista, 
    ListaRepository
}