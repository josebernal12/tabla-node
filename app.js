
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear()


console.log(argv)


//let base = 7



crearArchivo(argv.b, argv.l,argv.h)
    .then(nombredelarchivo => console.log(nombredelarchivo))
    .catch(err => console.log(err))
