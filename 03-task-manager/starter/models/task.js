const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({ name: String, completed: Boolean });
// when u set  the name to be "String" it creates a string constructor that automatically tries to construct whatever we have there into a string same as boolean
