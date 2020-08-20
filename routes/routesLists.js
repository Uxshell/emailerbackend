const express = require('express');
const ListService = require('../services/listService');


function routesListApi(app) {
    const router = express.Router();
    app.use('/lists', router);

    const ListService = new ListService();

    router.get('/getLists', async function(req, res, next) {
        //console.log(" req.query: " + JSON.stringify(req.body.query));
        try {
            const lists = await ListService.getLists(req.body.query);

            res.status(200).json({
                success: true,
                total: lists.length,
                lists: lists,
                message: 'query lists'
            });
        } catch (err) {
            res.status(501).json({
                total: 0,
                success: false,
                message: 'error'
            });
            next(err);
        }
    });




    router.post('/createList', async function(req, res, next) {
        const { body: list } = req;
        try {
            const listId = await ListService.createList({ list });

            res.status(201).json({
                listId: listId,
                success: true,
                message: 'list created'
            });
        } catch (err) {
            res.status(501).json({
                success: false,
                message: 'error'
            });
            next(err);
        }
    });





}


module.exports = routesListApi;