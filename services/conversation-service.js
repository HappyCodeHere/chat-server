var conversation = require("../models/conversation");
var uResponse = require("../utils/response-util");

var self = {};

self.getAll = function(req, res) {
  console.log(req.query.id);
  console.log(req.params.id);
  console.log('here')
    conversation.find({convId: req.query.id}, function(err, conversation) {
        if(uResponse.hasError(err, conversation, res)) return false;
        res.json({success: true, msg: 'Беседы получены!', conversation: conversation});
    })
};


self.create = function(req, res) {
  console.log(req);
  console.log(res);
  console.log('conversation creat');
  console.log(req.body)
    var conv = req.body;
    let id = req.body.id;
    console.log(id, 'here');
    conversation.create({
      convId: conv.id,
        name:conv.name,
        image: conv.image,
        message: conv.message,
        date: conv.date,


    }, function(err, conversation) {
        if(uResponse.hasError(err, conversation, res)) return false;
        res.json({success: true, msg: 'Диалог создан!', conversationDetail: conversation});
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
self.getById = function(req, res) {
    var contractorId = req.params.id;
    Contractor.findById(contractorId, function(err, contractors) {
        if(uResponse.hasError(err, contractors, res)) return false;
        res.json({success: true, msg: 'Сотрудники успешно извлечены!', contractors: contractors});
    })};
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
