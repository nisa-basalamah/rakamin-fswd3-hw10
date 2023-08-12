// handle data access and database operations, abstracting the interactions with the data storage layer from the services and controllers
const { Movie } = require("../models");

class MovieRepository {
  static findAll = async (params) => {
    try {
      const movies = await Movie.findAll();
      return movies;
    } catch (error) {
      console.log(error);
    }
  };

  static findOne = async (id) => {
    try {
      const movie = await Movie.findOne({
        where: {
          id,
        },
      });

      return movie;
    } catch (error) {
      console.log(error);
    }
  };

  static create = async (payload) => {
    try {
      const movie = await Movie.create(payload);
      return movie;
    } catch (error) {
      console.log(error);
    }
  };

  static update = async (id, payload) => {
    try {
      const movie = await Movie.update(payload, {
        where: {
          id,
        },
      });

      return movie[0];
    } catch (error) {
      console.log(error);
    }
  };

  static delete = async (id) => {
    try {
      const movie = await Movie.destroy({
        where: {
          id,
        },
      });

      return movie;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = MovieRepository;
