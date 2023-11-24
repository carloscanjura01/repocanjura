const Mongoose = require ("mongoose");
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
title: {
 type : String,
 trin: true,
 require: true,
},
description: {
type : String,
trin: true,
require: true,
},
image: {
type : String,
require: true,

},
hidden: {
type: Boolean,
default: false
},
} , {timestamps: true } );

module.exports = Mongoose.model("Post", PostSchema)