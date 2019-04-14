// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/expenses", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Expense.findAll({}).then(function(dbexpense) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbexpense);
    });
  });

  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbuser) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbuser); // returns as json when called on the webpage
    });
  });



  // POST route for saving a new todo
  app.post("/api/expenses", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Expense.create({
      category: req.body.category,
      amount: req.body.amount,
      type: req.body.type,
      enteredby: req.body.enteredby

    }).then(function(dbexpense) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbexpense);
    });
  });

  app.post("/api/users", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Expense.create({
      name: req.body.name,
      type: req.body.type

    }).then(function(dbuser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbuser);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/todos", function(req, res) {

  });



  //Adding Doctors

  app.post("/api/adddoctor", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Doctor.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      lead: req.body.lead

    }).then(function(dbdoctor) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbdoctor);
    });
  });


  app.get("/api/doctors", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Doctor.findAll({}).then(function(dbdoctor) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbdoctor); // returns as json when called on the webpage
    });
  });
};
