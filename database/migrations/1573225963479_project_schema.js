"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectSchema extends Schema {
  up() {
    this.create("projects", (table) => {
      table.increments();
      table.string("title", 240).notNullable();
      table.string("content").notNullable();
      table.string("url");
      table.timestamps();
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectSchema;
