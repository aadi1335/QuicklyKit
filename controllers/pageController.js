const { request, response } = require("express");
const feedbackSchema = require("../models/userFeedback");
const userSchema = require("../models/user");
const viewSchema = require("../models/viewCount");

const homePage = async (req, res) => {
  const authToken = req.cookies;
  const ispresent = "AuthenticationString" in authToken;
  if (!ispresent) {
    return res.redirect("/Login");
  }

  // finding the number of views on the website
  const count = await viewSchema.findOne(); // Use findOne() to get a single document
  if (count) {
    count.ViewCount = count.ViewCount + 1; // Increment the count
    await count.save(); // Save the updated document to the database
  } else {
    const isInitialised = await viewSchema.create({
      ViewCount: 1, // Start from 1 if no document exists
    });
  }

  // trying to display the feedback dynamically.
  const allFeedback = await feedbackSchema.find();
  return res.render("Home", { allFeedback, count });
};

const dashPage = (req, res) => {
  const authToken = req.cookies;
  const ispresent = "AuthenticationString" in authToken;
  if (!ispresent) {
    return res.redirect("/Login");
  }
  res.render("DashBoard");
};

const profilePage = (req, res) => {
  const authToken = req.cookies;
  const ispresent = "AuthenticationString" in authToken;
  if (!ispresent) {
    return res.redirect("/Login");
  }
  res.render("Profile");
};

const setPage = (req, res) => {
  const authToken = req.cookies;
  const ispresent = "AuthenticationString" in authToken;
  if (!ispresent) {
    return res.redirect("/Login");
  }
  res.render("Settings");
};

// starting with post request for main pages
const postFeedback = async (request, response) => {
  const authToken = request.cookies.AuthenticationString;
  // finding the user email based on the authentication string
  const user = await userSchema.findOne({ AuthToken: authToken });

  const { review, rating } = request.body;
  const iscreated = await feedbackSchema.create({
    UserName: user.UserName,
    Email: user.Email,
    Review: review,
    Rating: rating,
  });

  if (!iscreated) {
    return res.status(500).json({ message: "Internal server error" });
  }

  return response.redirect("/Profile");
};


module.exports = {
  homePage,
  dashPage,
  postFeedback,
  setPage,
  profilePage
}