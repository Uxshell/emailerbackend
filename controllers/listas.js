const { response } = require('express');

const Lista = require('../models/lista');
const Cliente= require('../models/clients');

const getListas = async(req, res = response) => {

    const listas = await Lista.find();
    res.json({
        ok: true,
       listas
    })
}


const crearLista = async(req, res = response) => {
//obligatorio
 const {nombre} = req.body;
console.log(req.body);
const lista = new Lista(req.body);
try{
    const listaDB = await lista.save();
    res.json({
        ok: true,
        msg: "lista guardada",
       lista: listaDB
      //  listas
    });
} catch (error) {
    console.log(error)
    res.status(500).json({
        ok: false,
        msg: 'Hable con el administrador'
    })
  
}}

/*const getClientsbyLista = async(req, res = response) => {
    const IdLISTA = req.params.id;
    
    try{
        //const lista = await Lista.findById( id );
        //await Lista.findByIdAndDelete( id );
        const clientes = await Cliente.find({IDLISTA:IdLISTA});
        res.json({
            ok: true,
           clientes
        })
    }catch (error) {

        console.log("ERROR DESDE getClientbyLista"+error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}*/




const borrarLista = async(req, res = response) => {

    const id  = req.params.id;

    try {
        
        const lista = await Lista.findById( id );

        if ( !lista ) {
            return res.status(404).json({
                ok: true,
                msg: 'Lista no encontrada por id',
            });
        }

        await Lista.findByIdAndDelete( id );


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
    getListas,
    crearLista,
    borrarLista
//    getClientsbyLista
}