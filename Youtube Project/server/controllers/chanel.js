import users from '../models/auth.js'
import mongoose from 'mongoose';

export const updateChannelData=async(req,res)=>{
    const {id:_id}=req.param;
    const {name,desc}=req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Channel Unavaialable...")
    }
    try {
        const updatedata = await users.findByIdAndUpdate(_id,{
            $set:{
                'name':name,'desc':desc
            }
        },{new:true})
            
        res.status(200).json({updatedata})
    } catch (error) {
        res.status(405).json({message:error.message})
    }
}

export const getAllChannels=async(req,res)=>{
    try {
        const allChannels = await users.find();
        const allChannelsDetails=[]
        allChannels.forEach((channel)=>{
            allChannelsDetails.push({
                _id: channel._id,
                name: channel.name,
                email: channel.email,
                desc: channel.desc
            })

        });
        res.status(200).json(allChannelsDetails)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}