import mongoose from 'mongoose';
const {Schema} = mongoose;

//id nombre completo   nomUsuario  email  contraseña

const usuarioSchema = new Schema({
    id:String,
    nombre:String,
    nomUsuario:String,
    email:String,
    contrasenya:String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

const UsuarioRepository ={
    
    
    async findAll(){
        return await Usuario.find().exec();
    },

    async findById(id){
        const result = await Usuario.findById(id).exec();
        return result != null ? result : undefined;
    },

    async create(nuevoUsuario) {
        const usuario= new Usuario({
            id:nuevoUsuario.id,
            nombre:nuevoUsuario.nombre,
            nomUsuario:nuevoUsuario.nomUsuario,
            email:nuevoUsuario.email,
            contrasenya:nuevoUsuario.contrasenya
        });
        const result = await usuario.save();
        return result;
    },

    async updateById(id, usuarioModificado) {
        const usuario = await Usuario.findById(id);

        if (usuario == null) {
            return undefined;
        } else {
            return await Object.assign(usuario, usuarioModificado).save();
        }
    },

    async update(usuarioModificado) {
        return await this.updateById(usuarioModificado.id, usuarioModificado);
    },

    async delete(id) {
        await Usuario.findByIdAndRemove(id).exec();
    }


}


export {
    Usuario,
    UsuarioRepository
}