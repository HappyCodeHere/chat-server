var mongoose    =   require("mongoose");
var mongoSchema =   mongoose.Schema;

var conversationSchema = new mongoSchema({
    convId: String,
    name : String,
    image : String,
    message : String,
    date : String,
});

module.exports = mongoose.model('conversation', conversationSchema);
