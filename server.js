const express = require("express");
const bodyParser = require("body-parser");
let app = express();
const db = require("./database/db.js");
// var router = express.Router();
app.use(express.static('public'));
// console.log("hend");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// router.use(function (req, res, next) {
//   console.log('Time is:', Date.now())
//   next()
// })
// router.use('http://localhost:3000', function (req, res, next) {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, function (req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// })

var inputName = '';
app.post('/data', function (req, res, next) {
  // console.log("////////////////////////");
  // db.save(req.body);
  // res.end();
  inputName = req.body.name;
  var inputDate = req.body.date;
  if (inputDate === '') {
    inputDate = new Date();
  } else {
    inputDate = new Date(req.body.date);
  }
  var inputText = req.body.text;
  if (inputText === '') {
    inputText = "#Hackers don't send normal messages";
  } else {
    inputText = req.body.text;
  }
  // console.log(" ********** ", typeof inputText," ********** ", typeof inputDate, " ", inputDate, " ********** ", typeof inputText);
  // {name: inputName, date: inputDate, text: inputText}
  db.saveDb({name: inputName, date: inputDate, text: inputText}, (err, data) => {
    if (err) {
      console.log("there was an err");
      // res.status(401);
      res.end("there was an err");
    } else {
      // console.log("success", data);
      // res.status(201);
      // res.end("it has been saved");
      // res.end(alert('evaluate response and show alert'));
      // res.send({ok: true});
      // res.send("hahahahahahahahahah");
      res.send(data);
    }
  });
  // res.send("haha")
  // res.render(<h1>haha</h1>)

})

app.get('/data', function (req, res, next) {
  // console.log("////////////////////////");
  // inputName = res.body.name;
  db.search(inputName, (err, data) => {
    if (err) {
      // console.log("there was an err");
      // res.status(401);
      res.end("there was an err");
    } else {
      // console.log("success");
      // res.status(201);
      // res.send({ok: true});
      // res.json(data);
      // console.log("hahahahahahahahahah", data);
      res.send(data);
    }
  })

});

app.listen(
  3000, function() {
  console.log(`listening on port 3000`);
});