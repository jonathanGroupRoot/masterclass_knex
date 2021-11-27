const knex = require("../database/index");

module.exports = {
    async index(request, response, next) {
        try {
            const { user_id, page = 1  } = request.query;
            const query = knex('projects')
            .limit(5)
            .offset((page - 1) * 5)

            const countOBject = knex('projects').count();

            if (user_id) {
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')

                countOBject.where({ user_id })
            }

            const [count] = await countOBject;
            response.header('X-Total-Count', count['count']);

            const results = await query;

            return response.json(results);

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const { user_id } = request.params;
            const { title } = request.body;

            await knex("projects").insert({ title, user_id });

            return response.status(201).send();

        } catch (error) {
            next(error)
        }
    },

    async update(request, response, next) {
        try {
            const { id } = request.params;
            const { title } = request.body;

            await knex("projects")
                .update({ title })
                .where({ id })

            return response.send();
        } catch (error) {
            next(error)
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex("projects")
                .where({ id })
                .del()

            return response.send();
        } catch (error) {
            next(error)
        }
    }
}