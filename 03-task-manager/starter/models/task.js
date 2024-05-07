const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({ name: String, completed: Boolean });
// when u set  the name to be "String" it creates a string constructor that automatically tries to construct whatever we have there into a string same as boolean

// MOVING TO ADD VALIDATION TO SCHEMA NEXT

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
/* the model method neeeds two parameters 1 is the name which must be a string and the other is the schema  "1/3
model(name: string, schema?: mongoose.Schema<any, mongoose.Model<any, any, any>, undefined, {}> | undefined, collection?: string | undefined, skipInit?: boolean | undefined)"  */

//  The .model() function makes a copy of schema. Make sure that you've added everything you want to schema, including hooks, before calling .model()!
