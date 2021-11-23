const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    nickname: {type: String, required: false},
    scores: [{ type: Types.ObjectId, ref: 'Score' }]
});

module.exports = model('User', schema);