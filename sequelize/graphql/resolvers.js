const { User, Post, Category } = require('../models');

module.exports = {
    Query: {
        add: async (_, { x, y }) => x + y,
        hello: () => { return "world 2" },
        categories: async () => {
            return await Category.findAll();
        },
        posts: async () => {
            return await Post.findAll();
        },
    },
    Post: {
        categories: async (post) => await post.getCategories()
    }
}