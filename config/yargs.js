const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'

    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'muestra la tabla en consola'

    }).option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta que numero va a multiplicar'

    })
    .check((argv, options) => {
        console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw ' la base tiene que ser un numero'
        }
        return true
    })
    .argv;

    module.exports = argv;