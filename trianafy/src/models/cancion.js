
import mongoose from 'mongoose';
const {Schema} = mongoose;


const cancionSchema = new Schema({
    id:String,
    title:String,
    artist:String,
    album:String,
    year:Number
})


const Cancion = mongoose.model('Cancion',cancionSchema);

const CancionRepository={

    async findAll(){
        return await Cancion.find().exec();
    },


    async findById(id){
        const result = await (await Cancion.findById(id)).exec();
        return result != null ? result : undefined;

    },

    async create(nuevaCancion) {
        const cancion = new Cancion({
            id : nuevaCancion.id,
            title : nuevaCancion.title,
            artist : nuevaCancion.artist,
            album : nuevaCancion.album,
            year : nuevaCancion.year
        });
        const result = await cancion.save();
        return result;
    },

    async updateById(id, cancionModificada) {
        const cancion = await Cancion.findById(id);

        if (cancion == null) {
            return undefined;
        } else {
            return await Object.assign(cancion, cancionModificada).save();
        }
    },

    async update(cancionModificada) {
        return await this.updateById(cancionModificada.id, cancionModificada);
    },

    async delete(id) {
        await Cancion.findByIdAndRemove(id).exec();
    }

}


export {

    Cancion, 
    CancionRepository
}