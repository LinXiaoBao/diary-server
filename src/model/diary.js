const mongoose = require('../mongoose');

const Schema = mongoose.Schema;

const DiarySchema = new Schema({
	title: String,
	content: String
}, { 
	versionKey: false 
});

const Diary = mongoose.model('Diary', DiarySchema);

module.exports = Diary;

