const courseModel = require("../models/course");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../util/mongoose");

class CourseController {
  //GET /course
  show(req, res, next) {
    courseModel
      .find({})
      .then((data) =>
        res.render("course/index", { data: mutipleMongooseToObject(data) })
      )
      .catch((err) => res.status(400).json({ error: "Error !!" }));
  }

  //GET /course:/slug
  detail(req, res, next) {
    courseModel
      .findOne({ slug: req.params.slug })
      .then((data) =>
        res.render("course/detail", { course: mongooseToObject(data) })
      )
      .catch((err) => console.log("Log : err", err));
  }

  //GET /course/create
  create(req, res, next) {
    res.render("course/create");
  }

  //POST /course/store
  store(req, res, next) {
    const course = new courseModel(req.body);
    course
      .save()
      .then((data) => res.redirect("/course"))
      .catch((err) => console.log("Log : err", err));
  }

  //GET /course/edit/:id
  edit(req, res, next) {
    courseModel
      .findById(req.params.id)
      .then((data) =>
        res.render("course/edit", { course: mongooseToObject(data) })
      )
      .catch((err) => console.log("Log : err", err));
  }

  //PUT /course/edit/:id
  update(req, res, next) {
    courseModel
      .updateOne({ _id: req.params.id }, req.body)
      .then((data) => res.redirect("/course"))
      .catch((err) => console.log("Log : err", err));
  }
}

module.exports = new CourseController();
