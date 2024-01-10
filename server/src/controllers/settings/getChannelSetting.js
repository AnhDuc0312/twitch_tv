import User from '../../models/User.js'
import Channel from '../../models/Channel.js';

export const getChannelSetting = async (req,res) => {
    try{
        const {userId} = req.user;

        const userData = await User.findById(userId, {
            channel: 1,
            username: 1,
        }).populate("channel");

        console.log(userData)

        if(userData && userData.channel){
            return res.status(200).json({
                id: userData.channel._id,
                username: userData.channel.username,
                title: userData.channel.title,
                description: userData.channel.description,
                avatarUrl: userData.channel.avatarUrl,
                streamKey: userData.channel.streamKey,
    
            });
        }else {
            return res.status(404).json({
                error: 'Không tìm thấy thông tin người dùng hoặc kênh',
            });
        }
    }catch (err) {
        console.log(err);
        return res.status(500).send('Some thing went wrong');
    }
}