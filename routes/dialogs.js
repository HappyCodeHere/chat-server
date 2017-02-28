var express = require('express');
var router = express.Router();
var dialogs = require('../services/dialogs-service');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.post('/', function(req, res, next) {
//   // console.log(dialogs.create(req, res));
//   dialogs.create(req, res).then((data)=> {
//     console.log('kkkkkkkkk',data);
//     res.send('respond with a resource');
//
//   }
// );
// });

//
router.route('/')
    .get(dialogs.getAll)
    .post(dialogs.create)
    // .delete(projectService.deleteAll);

module.exports = router;
