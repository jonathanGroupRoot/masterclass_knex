const knex = require("../database");

module.exports = {
    async index(request, response) {
        try {
            const results = await knex("users");
    
            return response.json(results);
    
        } catch (error) {
            return response.json(error);
        }
    }
}