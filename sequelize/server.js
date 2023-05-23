// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const { readFileSync } = require('fs');
const mercurius = require('mercurius');

const md5 = require('md5');

const { User, Post, Category } = require('./models');

fastify.register(require('@fastify/jwt'), {
    secret: 'secret'
})


fastify.register(mercurius, {
  schema: readFileSync('./graphql/schema.gql').toString(),
  resolvers: require('./graphql/resolvers'),
  graphiql: true,
})


fastify.decorate("authenticate", async function (request, reply) {
    try {
        await request.jwtVerify()
    } catch (err) {
        reply.send(err)
    }
})

fastify.post('/login', {
    schema: {
        body: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: { type: "string" },
                password: { type: "string" }
            }
        }
    }
}, async (request, reply) => {
    const { email, password } = request.body;
    const user = await User.findOne({
        where: {
            email: email
        }
    });
    if (!user) {
        return reply.status(401).send({ message: "email not ok" });
    } else if (!user.checkPassword(password)) {
        return reply.status(401).send({ message: "password not ok" });
    } else {
        const token = fastify.jwt.sign({
            payload: user.toJSON(),
        });
        return reply.send({ token });
    }
});


// Declare a route
// fastify.get('/', async (request, reply) => {
//     return { hello: 'world 3' }
// });

fastify.get(
    "/",
    {
        onRequest: [fastify.authenticate]
    },
    async function (request, reply) {
        return request.user
    }
)

fastify.get(
    '/who', 
    {
        onRequest: [fastify.authenticate]
    }, 
    async (request, reply) => {
        reply.send(request.user);
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
    if (category == null) {
        return reply.status(404).send({
            message: "Not existing category - ID:".concat(request.params.id),
        });
    }
    reply.send(category);
});

fastify.post('/categories', {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'color'],
            properties: {
                name: { type: "string" },
                color: { type: "string", pattern: "^#[0-9a-fA-F]{6}$" }
            }
        }
    }
}, async (request, reply) => {
    const { name, color } = request.body;
    const category = await Category.create({ name, color });
    reply.send(category);
});

fastify.put('/categories/:id', {
    schema: {
        params: {
            type: 'object',
            properties: {
                id: { type: "number" }
            }
        },
        body: {
            type: 'object',
            required: ['name', 'color'],
            properties: {
                name: { type: "string" },
                color: { type: "string", pattern: "^#[0-9a-fA-F]{6}$" }
            }
        }
    }
}, async (request, reply) => {
    const category = await Category.findByPk(request.params.id);
    if (category == null) {
        return reply.status(404).send({
            message: "Not existing category - ID:".concat(request.params.id),
        });
    }
    const { name, color } = request.body;
    await category.update({ name, color });
    reply.send(category);
});

fastify.patch('/categories/:id', {
    schema: {
        params: {
            type: 'object',
            properties: {
                id: { type: "number" }
            }
        },
        body: {
            type: 'object',
            properties: {
                name: { type: "string" },
                color: { type: "string", pattern: "^#[0-9a-fA-F]{6}$" }
            }
        }
    }
}, async (request, reply) => {
    const category = await Category.findByPk(request.params.id);
    if (category == null) {
        return reply.status(404).send({
            message: "Not existing category - ID:".concat(request.params.id),
        });
    }
    const { name, color } = request.body;
    await category.update({ name, color });
    reply.send(category);
});

fastify.delete('/categories', async (request, reply) => {
    await Category.destroy({
        where: {}
    });
    reply.send(204);
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