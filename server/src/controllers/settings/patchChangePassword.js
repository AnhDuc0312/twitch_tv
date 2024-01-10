import User from "../../models/User.js";
import bcript from 'bcryptjs';


export const patchChangePassword = async (req, res) => {
    try{
        const { userId } = req.user;

        const {password , newPassword} = req.body;

        const userData = await User.findById(userId , {
            password: 1
        })

        const isPasswordCorrect = await bcript.compare(password, userData.password)

        if(!isPasswordCorrect) {
            return res.status(400).send('Invalid password. Please try again');
        }

        const encryptedPassword = await bcript.hash(newPassword,10);

        await User.updateOne({_id:userId}, {password: encryptedPassword} );

        return res.status(200).send('Password changed successfully')

    }catch(err) {
        console.log(err);
        return res.status(400).send('Some thing went wrong. Please try again');

    }
}