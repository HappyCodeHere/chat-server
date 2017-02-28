var mongoose    =   require("mongoose");
var mongoSchema =   mongoose.Schema;

var dialogsSchema = new mongoSchema({
    id: Number,
    title : String,
    newMessages : Number
});

module.exports = mongoose.model('dialogs', dialogsSchema);
