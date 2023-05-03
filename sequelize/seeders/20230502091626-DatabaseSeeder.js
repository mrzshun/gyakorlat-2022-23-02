'use strict';
const { User, Post } = require('../models');
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
            for (let i = 0; i < userNum; i++) {
                let firstName = faker.name.firstName();
                let lastName = faker.name.lastName();
                await User.create({
                    name: firstName.concat(" ", lastName),
                    email: faker.internet.email(firstName, lastName),
                    password: md5('password'),
                });
            }
            const postNum = faker.datatype.number({
                min: 20,
                max: 30,
            });
            for (let i = 0; i < postNum; i++) {
                await Post.create({
                    title: faker.lorem.sentence(3),
                    description: faker.lorem.sentences(3),
                    text: faker.lorem.paragraphs(5),
                });
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
