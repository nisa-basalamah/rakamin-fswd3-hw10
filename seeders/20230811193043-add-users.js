"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "oainger0@craigslist.org",
          gender: "Female",
          password: "KcAk6Mrg7DRM",
          role: "Construction Worker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "hblything1@de.vu",
          gender: "Female",
          password: "QLXkU4wnRVbh",
          role: "Engineer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "sivermee2@vkontakte.ru",
          gender: "Male",
          password: "cQQ0flW",
          role: "Architect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "agreenan3@barnesandnoble.com",
          gender: "Female",
          password: "fk3GyIGQm",
          role: "Electrician",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "sthirst4@blog.com",
          gender: "Male",
          password: "rRbsjJGFMq57",
          role: "Construction Foreman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
