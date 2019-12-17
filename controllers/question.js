const queries = require("../config/queries");

module.exports = {
  async index(req, res) {
    try {
      queries.question.getAll().then(questions => {
        return res.status(200).send(questions);
      });
    } catch (error) {
      return res.status(404).send({ msg: "Erro ao listar foto", error });
    }
  },

  async show(req, res) {
    try {
      queries.question.getOne(req.params.id).then(question => {
        return res.status(200).send(question);
      });
    } catch (error) {
      return res.status(404).send({ msg: "Erro ao listar foto", error });
    }
  },

  async create(req, res) {
    try {
      queries.question.create(req.body).then(result => {
        return res.status(200).send(result);
      });
    } catch (error) {
      return res.status(404).send({ msg: "Erro ao listar foto", error });
    }
  }
};
