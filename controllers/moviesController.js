// handles incoming requests, processes input, interacts with services, and sends appropriate responses to clients
const MovieService = require("../services/movieService.js");

class MovieController {
  static findAll = async (request, response, next) => {
    try {
      const movies = await MovieService.findAll();

      response.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  };

  static findOne = async (request, response, next) => {
    try {
      const movie = await MovieService.findOne(request.params);

      if (!movie) {
        throw { name: "ErrorNotFound" };
      }

      response.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  };

  static create = async (request, response, next) => {
    try {
      const movie = await MovieService.create(request.file, request.body);

      response
        .status(201)
        .json({ message: "Movie record created successfully." });
    } catch (error) {
      next(error);
    }
  };

  static update = async (request, response, next) => {
    try {
      const movie = await MovieService.update(request.params, request.file, request.body);

      if (!movie) {
        throw { name: "ErrorNotFound" };
      }

      response.status(200).json({ message: "Data updated successfully." });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (request, response, next) => {
    try {
      const movie = await MovieService.delete(request.params);

      if (!movie) {
        throw { name: "ErrorNotFound" };
      }

      response.status(200).json({ message: "Data deleted successfully." });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MovieController;
