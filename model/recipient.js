//jshint esversion: 6
const mongoose = require('mongoose');
//const Schema = mongoose.Schema; same is written below
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: {type: Boolean, default: false}
});

mongoose.exports =  recipientSchema;