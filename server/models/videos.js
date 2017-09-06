var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videosSchema = mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        requried: true
    },
    videoName: {
        type: String
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Videos', videosSchema);