const express = require("express");
coconst express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mailChimp = require("@mailchimp/mailchimp_marketing");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")
});

mailChimp.setConfig({
  apiKey: process.env.apiKey,
  server: process.env.server
});

app.post("/", function(req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  }

  const jsonData = JSON.stringify(data);
  const url = process.env.mongoUrl;
  const options = {
    method: "POST",
    auth: process.env.mongoAuth
  }

  // On success send users to success, otherwise on failure template
  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

// Failure route
app.post("/failure", function(req, res) {
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at port 3000");
});
