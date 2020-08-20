const { response } = require('express');

const Black = require('../models/black');


const getBlacks = async(req, res = response) => {

    const blacks = await Black.find();
    res.json({
        ok: true,
       blacks
    })
}


const crearBlack = async(req, res = response) => {
//obligatorio
 //const {nombre} = req.body;
console.log(req.body);
const black = new Black(req.body);
try{
    const listaDB = await black.save();
    res.json({
        ok: true,
        msg: "lista guardada",
       black: listaDB
      //  listas
    });
} catch (error) {
    console.log(error)
    res.status(500).json({
        ok: false,
        msg: 'Hable con el administrador'
    })
   }
}


const borrarBlack = async(req, res = response) => {

    const id  = req.params.id;

    try {
        
        const lista = await Black.findById( id );

        if ( !lista ) {
            return res.status(404).json({
                ok: true,
                msg: 'Lista no encontrada por id',
            });
        }

        await Black.findByIdAndDelete( id );


        res.json({
            ok: true,
            msg: 'Lista eliminado'
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports = {
    getBlacks,
    crearBlack,
    borrarBlack
//    getClientsbyLista
}