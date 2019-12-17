const knex = require("./knex");

module.exports = {
  question: {
    getAll: function() {
      return knex("question");
    },

    getOne: function(id) {
      return knex("question")
        .where("id", id)
        .first();
    },

    create: function(question) {
      return knex("question")
        .insert(question)
        .returning("*");
    }
  }
};
