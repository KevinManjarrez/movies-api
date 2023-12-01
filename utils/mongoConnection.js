const mongoose = require('mongoose');
                            //USER  //PASSWORD                                  //BD
mongoose.connect(`mongodb+srv://kevin:12345@cluster0.ceudhch.mongodb.net/moviesAPI?retryWrites=true&w=majority`
).then(() => console.log('Conexion exitosa a MongoDB'))
.catch(err => console.log('Error al conectar a MongoDB: ', err));

module.exports = mongoose;