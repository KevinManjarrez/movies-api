const Movie = require('../models/movie.model');

// Consultar todos los pelicula
exports.getMovies = async (req, res) => {
    try {
        const Movies = await Movie.find();
        return res.status(200).json(
            {
                message: 'Películas obtenidas con éxito',
                data: Movies
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar películas',
                data: error
            }
        );
    }
};

// Consultar película por id
exports.getMovieById = async (req, res) => {
    const idMovie = req.params.id;
    try {
        const movie = await Movie.findOne({ idMovie: idMovie });
        return res.status(200).json(
            {
                message: 'Película obtenida con éxito',
                data: movie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar película',
                data: error
            }
        );
    }
};

// Crear pelicula
exports.newMovie = async (req, res) => {
    try {
        const { idMovie, titulo, director, genero, año, calificacion, sinopsis, actores, fechaEstreno } = req.body;
        const newMovie = new Movie({ idMovie, titulo, director, genero, año, calificacion, sinopsis, actores, fechaEstreno });
        await newMovie.save();

        return res.status(200).json(
            {
                message: 'Película creada con éxito',
                data: newMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al crear película',
                data: error
            }
        );
    }
};


// Actualizar pelicula
exports.updateMovie = async (req, res) => {
    const idMovie = req.params.id;
    const newData = req.body;
    try {
        const updatedMovie = await Movie.findOneAndUpdate({ idMovie: idMovie }, newData, { new: true });
        return res.status(201).json(
            {
                message: 'Película actualizada con éxito',
                data: updatedMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al actualizar película',
                data: error
            }
        );
    }
};

// Eliminar película
exports.deleteMovie = async (req, res) => {
    const idMovie = req.params.id;
    try {
        await Movie.findOneAndDelete({ idMovie: idMovie });
        return res.status(201).json(
            {
                message: 'Película eliminada con éxito'
            }
        );
    } catch (error) {
        console.log((error));
        return res.status(500).json(
            {
                message: 'Error al eliminar película',
                data: error
            }
        );
    }
};