const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: String,
    description: String,
    image: String,
    slug: { type: String, slug: "name", unique: true },
  },
  { collection: "Course" }
);

const courseModel = mongoose.model("Course", Course);

module.exports = courseModel;
