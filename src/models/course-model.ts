// **** Types **** //

// User schema
import mongoose, { Schema, Document } from "mongoose";

export interface ICourse {
  name: string
  creator: string
  duration: number
  subject: string
  tags: string[]
  targetAudience: string[]
  thumbnailUrl: string
  short_desc: string
  creator_email: string
  _creatorId: CreatorId
}

export interface CreatorId {
  $oid: string
}


const CourseSchema: Schema = new Schema({
  name: {
    type: "String",
  },
  creator: {
    type: "String",
  },
  duration: {
    type: "Number",
  },
  subject: {
    type: "String",
  },
  tags: {
    type: ["String"],
  },
  targetAudience: {
    type: ["String"],
  },
  thumbnailUrl: {
    type: "String",
  },
  short_desc: {
    type: "String",
  },
  creator_email: {
    type: "String",
  },
  _creatorId: {
    $oid: {
      type: "ObjectId",
    },
  },
});

export default mongoose.model<ICourse>("Course", CourseSchema);
