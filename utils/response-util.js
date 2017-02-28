var self = {};

self.hasError = function(err, unit, res, msg) {
    var message = msg ? msg : 'Внутренняя ошибка сервера';
    if(err || !unit){
        res.json({success: true, msg: message, err: err});
        return true;
    }
};

module.exports = self;