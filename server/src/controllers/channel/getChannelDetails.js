import User from "../../models/User.js"
import Channel from "../../models/Channel.js"

export const getChannelDetails = async (req,res) => {

    try{
        const {channelId} = req.params;

        const channel = await Channel.findById(channelId);

        if(!channel || !channel.isACtive) {
            return res.status(404).send('Channel not found');
        }

        const user = await User.findOne({channel: channelId}, {username: 1})

        const streamUrl = 'http';

        const isOnline = false;

        return res.status(200).json({
            id : channel._id,
            title : channel.title,
            description : channel.description,
            username: user.username,
            isOnline: isOnline,
            streamUrl : streamUrl,
        })
    }catch(err) {
        console.log(err);
        return res.status(500).send('Some thing went wrong');
    }
    
}