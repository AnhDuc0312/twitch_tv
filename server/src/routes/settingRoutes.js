import express from 'express';
import Joi from 'joi';
import ExpressValidation from 'express-joi-validation';
import { verifyToken } from '../middlewares/auth.js';
import { getChannelSetting} from '../controllers/settings/getChannelSetting.js'
import { putChannelSetting } from '../controllers/settings/putChannelSetting.js'
import { patchChangePassword } from '../controllers/controllers.js'

const router = express.Router();

const validator = ExpressValidation.createValidator({});

const channelSettingsSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    description: Joi.string().min(10).max(200).required(),
    title: Joi.string().min(3).max(30).required(),
    avatarUrl : Joi.string().uri().required(),
})

const changePasswordSchema = Joi.object({
    password: Joi.string().min(6).max(12),
    newPassword: Joi.string().min(6).max(12) 
})

router.get('/channel', verifyToken, getChannelSetting)
router.put('/channel',validator.body(channelSettingsSchema), verifyToken , putChannelSetting)
router.patch('/password',verifyToken,validator.body(changePasswordSchema),patchChangePassword);

export default router;