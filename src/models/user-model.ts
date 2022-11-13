// **** Types **** //

// User schema
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstname: string
  lastname: string
  location: string
  isPrime: boolean
  email: string
}

const UserSchema: Schema = new Schema({
  firstname: {
    type: "String",
  },
  lastname: {
    type: "String",
  },
  location: {
    type: "String",
  },
  isPrime: {
    type: "Boolean",
  },
  email: {
    type: "String",
  },
});


export default mongoose.model<IUser>('User', UserSchema);