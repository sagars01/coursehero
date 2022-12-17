import mongoose, { Schema, Document } from "mongoose";


export interface IPostsModel extends Document {
    blocks: any[];
    entityMap: {};
}

const schema = new mongoose.Schema({
    blocks: {
        type: [mongoose.Schema.Types.Mixed]
    },
    entityMap: {}
});


export default mongoose.model<IPostsModel>('Posts', schema); 
