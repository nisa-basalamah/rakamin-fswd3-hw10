// handles incoming requests, processes input, interacts with services, and sends appropriate responses to clients
const UserService = require("../services/userService.js");

class UserController {
  static findAll = async (request, response, next) => {
    try {
      const users = await UserService.findAll();

      response.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  static findOne = async (request, response, next) => {
    try {
      const user = await UserService.findOne(request.params);

      if (!user) {
        throw { name: "ErrorNotFound" };
      }

      response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  static create = async (request, response, next) => {
    try {
      const user = await UserService.create(request.body);

      response.status(201).json({
        message: "User registration successful.",
        user: {
          email: user.dataValues.email,
          gender: user.dataValues.gender,
          role: user.dataValues.role,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (request, response, next) => {
    try {
      const user = await UserService.update(request.params, request.body);

      if (!user) {
        throw { name: "ErrorNotFound" };
      }

      response.status(200).json({ message: "Data updated successfully." });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (request, response, next) => {
    try {
      const user = await UserService.delete(request.params);

      if (!user) {
        throw { name: "ErrorNotFound" };
      }

      response.status(200).json({ message: "Data deleted successfully." });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
