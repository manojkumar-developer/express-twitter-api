const Twitter  = require("twitter");

const TwitterAPI = new Twitter ({
    consumer_key: "1QBy65AtVWsXNMyJ95GXe0WDg",
    consumer_secret: "zlyqM5mbIuXcmfbAqowGMKv54zKsTypvO2fItOm983nwNe7pUE",
    access_token_key: "2763143244-xySTw6f5cwuoUJZDfENwz0fF7IuWqWzu6TY2hXv",
    access_token_secret: "c1LowyNYHygazHOBv1qcU49GyqZHBTNkvKPLWwphgUxth",
});

module.exports = {
    TwitterAPI
}