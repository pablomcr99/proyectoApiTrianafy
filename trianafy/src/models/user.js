import mongoose from 'mongoose';
const {Schema} = mongoose;

//id nombre completo   nomUsuario  email  contraseña

const usuarioSchema = new Schema({
    fullname:String,
    username:String,
    email:String,
    password:String
});

const User = mongoose.model('User', usuarioSchema);

const userRepository ={
    
    
    async findAll(){
        return await User.find().exec();
    },

    async findById(id){
        const result = await User.findById(id).exec();
        return result != null ? result : undefined;
    },

    async findByUsername(username) {
        const result = await User.findOne({username:username}).exec(); 
        return result != null ? result : undefined;   
     },

     async findByEmail(email) {
        const result = await User.findOne({email:email}).exec(); 
        return result != null ? result : undefined;   
     },

    async create(nuevoUsuario) {
        const usuario= new User({
            fullname: nuevoUsuario.fullname,
            username: nuevoUsuario.username,
            email: nuevoUsuario.email,
            password: nuevoUsuario.password
        });
        const result = await usuario.save();
        return result;
    },

    async updateById(id, usuarioModificado) {
        const usuario = await User.findById(id);

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
        await User.findByIdAndRemove(id).exec();
    }


}


export {
    User,
    userRepository
}