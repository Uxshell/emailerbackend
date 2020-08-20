const MongoLib = require('../lib/mongo');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { config } = require('../config');

class ListService {
    constructor() {
        this.collection = 'lists';
        this.mongoDB = new MongoLib();
    }

    async getList(query) {
        //const query = tags && { tags: { $in: tags } };

        const lists = await this.mongoDB.getAll(this.collection, query);
        return lists;
    }

    async createList({ list }) {
        const newList = await this.mongoDB.create(this.collection, list);
        return newList;
    }


}


module.exports = ListService;