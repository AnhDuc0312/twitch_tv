import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid';


const {Schema} = mongoose;

const defaultTitle = "New channel";

const defaultDescription = "This is new channel description";

const channelSchema = new Schema({
    isACtive: {type: Boolean, default: false},
    title: {type: String , default:defaultTitle},
    description: {type:String, default: defaultDescription},
    avatarUrl : {type: String, default:'none'},
    streamKey: {type: String , default: uuidv4()},
    message: {
        type: [{type: Schema.Types.ObjectId,  ref: "Message"}],
        default:[],
    },
});

export default mongoose.model("Channel", channelSchema);