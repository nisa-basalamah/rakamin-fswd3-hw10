// handle data access and database operations, abstracting the interactions with the data storage layer from the services and controllers
const { User } = require("../models");

class UserRepository {
  static findAll = async (params) => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.log(error);
    }
  };

  static findOne = async (id) => {
    try {
      const user = await User.findOne({
        where: {
          id,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  };

  static create = async (payload) => {
    try {
      const user = await User.create(payload);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  static update = async (id, payload) => {
    try {
      const user = await User.update(payload, {
        where: {
          id,
        },
      });

      return user[0];
    } catch (error) {
      console.log(error);
    }
  };

  static delete = async (id) => {
    try {
      const user = await User.destroy({
        where: {
          id,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = UserRepository;
