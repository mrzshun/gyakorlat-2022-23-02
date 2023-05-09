// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const { User, Post, Category } = require('./models');


// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world 3' }
});

// fastify.get('/:id', {
//     schema: {
//         params: {
//             type: 'object',
//             properties: {
//                 id: { type: "number" }
//             }
//         }
//     }
// }, async (request, reply) => {
//     return { hello: request.params.id }
// });

fastify.get('/categories', async (request, reply) => {
    const categories = await Category.findAll();
    reply.send(categories);
});

fastify.get('/categories/:id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: "number" }
                }
            }
        }
    }, async (request, reply) => {
    const category = await Category.findByPk(request.params.id);
    if(category == null) {
        return reply.status(404).send({
            message: "Not existing category - ID:".concat(request.params.id), 
        });
    }
    reply.send(category);
});



// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()