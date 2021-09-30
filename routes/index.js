var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  // if auth
  // db user cart
  // console.log(req.isLogin);
  // let isLogin = false;
  // if (req.isLogin) {
  //   isLogin = true;
  // }
  console.log(req.isLogin);

  res.render('index', { isLogin: req.isLogin });
});

module.exports = router;
