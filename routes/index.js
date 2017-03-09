var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/roll', function(req, res) {
  console.log(req.body);
  res.status(200).json({
    response_type: "in_channel",
    attachments: [
      {
        color: "good",
        text: "@" + req.body.user_name + " rolled *100*",
        fields: [
          {
            title: "Dice",
            value: "1d100",
            short: true
          },
          {
            title: "Rolls",
            value: "100",
            short: true
          }
        ]
      }
    ]
  });
});

module.exports = router;
