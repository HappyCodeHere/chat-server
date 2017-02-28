var dialogs = require("../models/dialogs");
var uResponse = require("../utils/response-util");

var self = {};

self.getAll = function(req, res) {
  console.log('here')
    dialogs.find(function(err, dialogs) {
        if(uResponse.hasError(err, dialogs, res)) return false;
        res.json({success: true, msg: 'Диалоги получены!', dialogs: dialogs});
    })
};


self.create = function(req, res) {
  console.log(req);
  console.log(res);
  console.log('dialogs creat');
  console.log(req.body)
    var dialog = req.body;
    dialogs.create({
        id:dialog.id,
        title: dialog.title,
        newMessages: dialog.newMessages,
    }, function(err, dialogs) {
        if(uResponse.hasError(err, dialogs, res)) return false;
        res.json({success: true, msg: 'Диалог создан!', dialogs: dialogs});
    })
};
//
// self.deleteAll = function(req, res) {
//     Contractor.remove(function(err) {
//         if(uResponse.hasError(err, true, res)) return false;
//         res.json({success: true, msg: 'Сотрудники удалены!'});
//     })
// };
//
// self.getById = function(req, res) {
//     var contractorId = req.params.id;
//     Contractor.findById(contractorId, function(err, contractors) {
//         if(uResponse.hasError(err, contractors, res)) return false;
//         res.json({success: true, msg: 'Сотрудники успешно извлечены!', contractors: contractors});
//     })};
//
// self.edit = function(req, res) {
//     var contractorId = req.params.id;
//     var newContractor = req.body;
//     Contractor.update({'_id': contractorId}, newContractor, function(err, response) {
//                 if(uResponse.hasError(err, response.ok, res)) return false;
//                 res.json({success: true, msg: 'Сотрудник успешно изменен!'});
//             });
// };
//
// self.deleteById = function(req, res) {
//     var contractorId = req.params.id;
//     Contractor.remove({'_id': contractorId}, function(err) {
//         if(uResponse.hasError(err, true, res)) return false;
//         res.json({success: true, msg: 'Сотрудник удален!'});
//     })};

module.exports = self;


console.log(self);
