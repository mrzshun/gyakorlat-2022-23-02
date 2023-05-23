'use strict';
const { User, Post, Category } = require('../models');
const md5 = require('md5');
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            const userNum = faker.datatype.number({
                min: 10,
                max: 15,
            });
            const users = [];
            for (let i = 0; i < userNum; i++) {
                let firstName = faker.name.firstName();
                let lastName = faker.name.lastName();
                users.push(
                    await User.create({
                        name: firstName.concat(" ", lastName),
                        email: "user".concat(i).concat("@szerveroldali.com"),
                        password: md5('password'),
                    })
                );
            }
            const postNum = faker.datatype.number({
                min: 20,
                max: 30,
            });
            const posts = [];
            for (let i = 0; i < postNum; i++) {

                const user = faker.helpers.arrayElement(users);
                posts.push(
                    await user.createPost({
                        title: faker.lorem.sentence(3),
                        description: faker.lorem.sentences(3),
                        text: faker.lorem.paragraphs(5),
                    })
                );
            }

            const catNum = faker.datatype.number({
                min: 8,
                max: 12,
            });
            const categories = [];
            for (let i = 0; i < catNum; i++) {
                categories.push(
                    await Category.create({
                        name: faker.lorem.word(),
                        color: faker.internet.color(),
                    })
                );
            }

            for (const post of posts) {
                let postCat = faker.helpers.arrayElements(
                    categories,
                    faker.datatype.number({
                        min: 0,
                        max: catNum,
                    })
                );
                await post.setCategories(postCat);
            }

        } catch (error) {
            console.log("Seeding error");
            console.log(error);
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
