const users = require("express").Router();
const { searchUsers, getTweetsByUser } = require("./actions");

//const CreateValidation = require.main.require("./app/validation/twitter/create");
/**
 * @api {get} /twitter/:id Get twitter
 * @apiName Gettwitters
 * @apiGroup twitter
 *
 * @apiParam {String} id twitter unique ID.
 *
 * @apiSuccess {String} title Title of the twitter.
 * @apiSuccess {String} text Text of the twitter.
 */

users.get("/", searchUsers);
users.get("/tweets", getTweetsByUser);

module.exports = users;
