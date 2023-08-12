// contains business logic, handles complex operations and interactions with repositories to manipulate data and perform domain-specific tasks
const MovieRepository = require("../repositories/movieRepository.js");

class MovieService {
  static findAll = async (params) => {
    try {
      const movies = await MovieRepository.findAll();
      return movies;
    } catch (error) {
      console.log(error);
    }
  };

  static findOne = async (params) => {
    try {
      const { id } = params;

      const movie = await MovieRepository.findOne(id);
      return movie;
    } catch (error) {
      console.log(error);
    }
  };

  static create = async (filePhoto, params) => {
    try {
      const { title, genres, year } = params;
      const payload = { title, genres, year };

      if (filePhoto) {
        const linkPhoto = `http://localhost:3000/${filePhoto.filename}`;
        payload.photo = linkPhoto;
      }

      const movie = await MovieRepository.create(payload);
      return movie;
    } catch (error) {
      console.log(error);
    }
  };

  static update = async (pathParams, filePhoto, params) => {
    try {
      const { id } = pathParams;

      const { title, genres, year } = params;
      const payload = { title, genres, year };

      if (filePhoto) {
        const linkPhoto = `http://localhost:3000/${filePhoto.filename}`;
        payload.photo = linkPhoto;
      }

      const movie = await MovieRepository.update(id, payload);
      return movie;
    } catch (error) {
      console.log(error);
    }
  };

  static delete = async (params) => {
    try {
      const { id } = params;

      const movie = await MovieRepository.delete(id);
      return movie;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = MovieService;
