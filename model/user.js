//jshint esversion: 6
const mongoose = require('mongoose');
//const Schema = mongoose.Schema; same is written below
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number,default: 100}
});

mongoose.model('users', userSchema);