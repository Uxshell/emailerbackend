const { response } = require('express');

const Lista = require('../models/lista');
const Cliente= require('../models/clients');

const getClientes = async(req, res = response) => {

    const clientes = await Cliente.find();
    res.json({
        ok: true,
       clientes
    })
}

const getClientsbyLista = async(req, res=response) => {
    const IdLISTA = req.params.id;
    //let clientes: Cliente[]= [];
    let data;
    try{
        //const lista = await Lista.findById( id );
        //await Lista.findByIdAndDelete( id );
        data = await Cliente.find({IDLISTA:IdLISTA});
        console.log('resultado de query getClientsbyLista'+data);
        res.json({

            ok: true,
           data
           
        })
    }catch (error) {

        console.log("ERROR DESDE getClientbyLista"+error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}



module.exports = {
  getClientes,
    getClientsbyLista
}