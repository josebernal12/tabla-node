const fs = require('fs')
const colors = require('colors')
const crearArchivo = async (base = 5,l,h) => {
    try {
      

        let salida = ''
        for (let i = 1; i <= h; i++) {
            salida += (`${base} x ${i} = ${base * i} \n`)
        }

        if(l === true){
            console.log('============'.green)
            console.log('tabla del:'.blue, base)
            console.log('============'.green)
            console.log(salida.red)
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return (`tabla de ${base}.txt creada`.blue)
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
} 