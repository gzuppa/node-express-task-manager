exports.Home = (req, res) => {
    res.render('index', {
        nombrePagina: "Task manager"
    });
}

exports.nuevoProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: "Nuevo Proyecto"
    });
}