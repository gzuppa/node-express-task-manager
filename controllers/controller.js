const Proyectos = require('../models/Proyectos');

exports.Home = (req, res) => {
    res.render('index', {
        nombrePagina: "Task manager"
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: "Nuevo Proyecto"
    });
}

exports.nuevoProyecto = (req, res) => {
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'})
    }

    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        })
    } else {
        Proyectos.create({ nombre })
            .then(() => console.log("Insertado correctamente"))
            .catch(error => console.log(error))
    }
}