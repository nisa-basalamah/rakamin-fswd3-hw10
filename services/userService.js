// contains business logic, handles complex operations and interactions with repositories to manipulate data and perform domain-specific tasks
const UserRepository = require("../repositories/userRepository.js");

class UserService {
  static findAll = async (params) => {
    try {
      const users = await UserRepository.findAll();
      return users;
    } catch (error) {
      console.log(error);
    }
  };

  static findOne = async (params) => {
    try {
      const { id } = params;

      const user = await UserRepository.findOne(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  static create = async (params) => {
    try {
      const { email, gender, password, role } = params;
      const payload = { email, gender, password, role };

      const user = await UserRepository.create(payload);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  static update = async (pathParams, params) => {
    try {
      const { id } = pathParams;

      const { email, gender, password, role } = params;
      const payload = { email, gender, password, role };

      const user = await UserRepository.update(id, payload);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  static delete = async (params) => {
    try {
      const { id } = params;

      const user = await UserRepository.delete(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = UserService;
