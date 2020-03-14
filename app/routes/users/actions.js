//const mongoose = require("mongoose");
const { TwitterAPI } = require("../../config");

const searchUsers = (req, res) => {
  const search = req.query.search;
  const limit = 10;
  TwitterAPI.get(`users/search.json?q=${search}&count=${limit}`,function (err, data) {
    if (err) {
      return res.status(401).json(err);
    }
    return res.status(200).json(data);
  });
}

const getTweetsByUser = (req, res) => {
  const screenName = req.query.name;
  const limit = 25;
  TwitterAPI.get(`statuses/user_timeline.json?screen_name=${screenName}&count=${limit}`,function (err, data) {
    if (err) {
      return res.status(401).json(err);
    }
    return res.status(200).json(data);
  });
}

module.exports = {
  searchUsers,
  getTweetsByUser
}